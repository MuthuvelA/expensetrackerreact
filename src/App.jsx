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
  function getformData(title, amount){
    const obj = {id: expenseArr[expenseArr.length - 1].id + 1, expense:title, amount:parseInt(amount)};
    // expenseArr.push(obj);
    var arr = [...expenseArr,obj];
    setExpenseArr(arr);
    console.log(arr);

  }
  function displaydata(object){
    console.log(object);
  }
  // function deleteArr(index){
  //   var arr=[...expenseArr];
  //   arr.splice(index,1);
  //   setExpenseArr(arr);
  // }

  return (
    <>
      <h1>EXPENSE TRACKER</h1>
      <div>
        <ExpenseForm value={getformData}/>
      </div>
      <div>
        {expenseArr.map((value,index)=>(
          <ExpenseList id={value.id} expense={value.expense} amount={value.amount} index={index}  disp={displaydata}/>
        ))
        }
      </div>

    </>
  )
}

export default App
