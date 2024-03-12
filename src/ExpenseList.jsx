import React from "react";

function ExpenseList(props){
    const {id, expense, amount, index, deleteArr,} = props;

    /*function handleDelete(event){
        const button = event.target;
        const del = button.parentNode;
        del.remove();
    }*/

    function handleDelete(index){
        props.deleteArr(index);
    }

    function handleEdit(index){
        props.handleEdit(index);
        
    }
    return(
     <>  
       <div className="expense-item-container">
            <div className={`expense-item ${amount > 0 ? "positive" : "negative"}`}>
                <div className="expense-title">{expense}</div>
                <div className="expense-amount">{amount}</div>
            </div>
            <button className="update-btn" onClick={() => handleEdit(index)}>Edit</button>
          <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
        </div>
    </>
)
}

export default ExpenseList;