import { useState } from 'react'
import './App.css'
import ExpenseForm from './ExpenseData'
import ExpenseList from './ExpenseList'

function App() {
  const [count, setCount] = useState(0)
  const [expenseArr,setExpenseArr]=useState(
    [
      {id:1,expense:"Food",amount:-1000},
      {id:2,expense:"Salary",amount:5000},
      {id:3,expense:"Cloth",amount:-500},
    ]
  )
  const [title,setTitle]=useState() 
  const [amount,setAmount]=useState(0) 
  const [edited,setisEdit]=useState(false)
  const [index,setIndex]=useState(0)

  function getformData(title, amount){
    if(edited){
      var arr=[...expenseArr];
      arr[index].expense=title;
      arr[index].amount=amount;
      setExpenseArr(arr);
      setisEdit(false);

    }
    else{
      var obj={id: expenseArr.length > 0  ?expenseArr[expenseArr.length-1].id+1:1,expense:title,amount:parseInt(amount)}
      var arr=[...expenseArr,obj]
      setExpenseArr(arr);
      console.log(arr);

    }

  }
 
  function deleteArr(index){
    var arr=[...expenseArr];
    arr.splice(index,1);
    setExpenseArr(arr);
  }
  function handleEdit(index){
    setIndex(index)
    var arr=[...expenseArr];
    setTitle(arr[index].expense)
    setAmount(arr[index].amount)
    setisEdit(true);

  }
  var income=0,expense=0,bal=0;
  expenseArr.forEach((value)=>{
    if(value.amount>0){
      income+=parseInt(value.amount)
    }else{
      expense+=parseInt(value.amount)
    }
  })
  var bal=0
  if(income+expense>0) bal=income+expense;
  return (
    <>
      <h1>EXPENSE TRACKER</h1>
      <div>
        <div className="balance">Balance: {bal}</div>
        <div class="income-expense-container">
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
        <ExpenseForm value={getformData} title={title} amount={amount}/>
      </div>
      <div>
        {expenseArr.map((value,index)=>(
          <ExpenseList id={value.id} expense={value.expense} amount={value.amount} index={index} handleEdit={handleEdit} deleteArr={deleteArr}/>
        ))
        }
      </div>

    </>
  )
}

export default App
