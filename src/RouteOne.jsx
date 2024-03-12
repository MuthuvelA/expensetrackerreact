import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import axios from 'axios';
function RouteOne() {
    const [count, setCount] = useState(0)
    const [expenseArr, setExpenseArr] = useState(
      [
        { id: 1, expense: "Food", amount: -1000 },
        { id: 2, expense: "Salary", amount: 5000 },
        { id: 3, expense: "Cloth", amount: -500 }
      ]
    )
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0)
    const [isEdit, setIsEdit] = useState(false)
    const [Index, setIndexValue] = useState();
  
    async function getFormValue(title, amount) {
      if (isEdit) {
        var arr = [...expenseArr];
        arr[Index].expense = title;
        arr[Index].amount = amount;
        setExpenseArr(arr)
        setIsEdit(false)
      } else {
        var obj = { id: expenseArr.length > 0 ? expenseArr[expenseArr.length - 1].id + 1 : 1, expense: title, amount: parseInt(amount) }
        var arr = [...expenseArr, obj]
        setExpenseArr(arr)
        var dbObj = { name: title, amount: amount }
        var res = await axios.post("http://localhost:8000/expenses", dbObj)
      }
  
    }
  
    function deleteArr(index) {
      var arr = [...expenseArr];
      arr.splice(index, 1);
      setExpenseArr(arr)
    }
  
    function handleEdit(index) {
      setIndexValue(index)
      var arr = [...expenseArr];
      setTitle(arr[index].expense)
      setAmount(arr[index].amount)
      setIsEdit(true)
    }
  
    var income = 0, expense = 0;
  
    expenseArr.forEach((value) => {
      if (value.amount > 0) {
        income += value.amount;
      } else {
        expense += value.amount
      }
    })
  
    async function getCall() {
      var res = await axios.get("http://localhost:8000/expenses")
      console.log("ressss", res.data);
    }
  
    useEffect(() => {
      getCall()
    }, [])
    return (
        <>
            <h1>Expense Tracker</h1>
            <div>
                <div className="balance">Balance: {income + expense}</div>
                <div className="income-expense-container">
                    <div className="income">
                        <span className="title">Income</span>
                        <span>{income}</span>
                    </div>
                    <div className="block"></div>
                    <div className="expense">
                        <span className="title">Expense</span>
                        <span>{expense}</span>
                    </div>
                </div>
                <ExpenseForm FormValue={getFormValue} title={title} amount={amount} />
            </div>
            <div>
                {expenseArr.map((value, index) => (
                    <ExpenseList id={value.id} key={index} expense={value.expense} amount={value.amount} index={index} deleteArr={deleteArr} handleEdit={handleEdit} />
                ))}

            </div>
            <Link to={"/routetwo"}>Route Me</Link>
       
        </>
    )

}

export default RouteOne;