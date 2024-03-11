import React, { useState } from "react";

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

    return(
    <>
        <div>
        <form onSubmit={HandleSubmit}>
          <div className="input-container" >
            <label >Title:</label>
            <input type="text"  placeholder="Enter description" onChange={HandleTitle} ></input>
          </div>
          <div className="input-container">
            <label >Amount:</label>
            <input type="number"  placeholder="Enter amount" onChange={HandleAmount } />
          </div>
          <button type="submit" >ADD</button>
        </form>
      </div>
    </>
    );
}

export default Expense;