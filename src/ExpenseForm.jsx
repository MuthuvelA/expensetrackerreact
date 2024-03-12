import React, { useEffect, useState } from "react";

function ExpenseForm(props) {
    const [amount, setAmount] = useState(0)
    const [title, setTitle] = useState();

    function handleSubmit(event){
        event.preventDefault()
        props.FormValue(title, amount)
        setAmount("")
        setTitle(0)
    }

    function handleTitleChange(e){
        setTitle(e.target.value)
    }

    function handleAmountChange(e){
        setAmount(e.target.value)
    }

    useEffect(() => {
        setTitle(props.title)
    }, [props.title])

    useEffect(() => {
        setAmount(props.amount)
    }, [props.amount])

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={handleTitleChange} />
            </div>
            <div className="input-container">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
            </div>
            <button type="submit">Add Transaction</button>
        </form>
    )
}

export default ExpenseForm;