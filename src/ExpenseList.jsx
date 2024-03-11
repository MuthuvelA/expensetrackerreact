import React from "react";

function ExpenseList(props) {
    
    const {id,expense,amount,index}=props;  

    function handleDelete(event) {
            const button = event.target;
            const rem = button.parentNode;
            rem.remove();   
            // props.deleteArr(index);
    }
   
    return (
        <>
        <div className="expense-item-container">
            <div className={`expense-item ${amount>0 ? 'positive' : 'negative'}`}>
                <div className="expense-title">{expense}</div>
                <div className="expense-amount">{amount}</div>
            </div>
            <button className="delete-btn" onClick={handleDelete} >delete</button>
            {/* <button className="delete-btn" onClick={handleDelete(index)} >delete</button> */}
            
            
        </div>
            
        </>
    );
  
}

export default ExpenseList;
