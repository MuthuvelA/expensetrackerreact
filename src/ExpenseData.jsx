import React, { useEffect, useState } from "react";

function Expense(props){
    const [title,settitle]=useState()
    const [amount,setamount]=useState(0);

   
    function HandleSubmit(event){
        event.preventDefault();
        props.value(title,amount)
    }
    function HandleAmount(e){
        setamount(e.target.value)
    }
    function HandleTitle(e){
        settitle(e.target.value)
    }
    useEffect(()=>{
      settitle(props.title)
    },[props.title])
    useEffect(()=>{
      setamount(props.amount)
    },[props.amount])
    return(
    <>
        <div>
        <form onSubmit={HandleSubmit}>
          <div className="input-container" >
            <label >Title:</label>
            <input type="text" value={title}  placeholder="Enter description" onChange={HandleTitle} ></input>
          </div>
          <div className="input-container">
            <label >Amount:</label>
            <input type="number" value={amount}  placeholder="Enter amount" onChange={HandleAmount } />
          </div>
          <button type="submit" >ADD</button>
        </form>
      </div>
    </>
    );
}

export default Expense;