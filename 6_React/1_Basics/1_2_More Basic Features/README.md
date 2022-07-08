<!------------------------------------------------------------------------------------------------------------------------------>User Interaction and State

Tags:
- Handling Events
- Updating the UI and working with State
- A closer look at components and State

✅ ————————————————  Events and States  ————————————————

    ExpenseItem.js ---->
    import React, { useState } from 'react';
    import Card from './Card';
    import './ExpenseItem.css';

function ExpenseItem (props) {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated);
    };

return (
        <Card className="class-name">
            <div>{title}</div>
            <div>
                <h2>{props.amount}</h2>
                <div>$ {props.date}</div>
            </div>
            <button onClick={clickHandler}>Click me to change a State</button>
        <Card>
    )
}
export default ExpenseItem;

- Adding Form Inputs

NewExpense.js --->

    import React, { useState } from 'react';

const NewExpense = (props) => {
    <!--To define more than one state, we have two options, first-->
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
     <!--To define more than one state, we have two options, second-->
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // or
        setUserInput(prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        })
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        //or
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value }
        });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // or
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value }
        });
    };
    const SubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount, 
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
    }
    return (
        <div className="new-expense">
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input 
                            type='text' 
                            value={enteredTitle}            
                            onChange={titleChangeHandler}
                        />                                  <!--It is important to not to  add () to the function-->
                        </div>                               <!--value in inputs tags acts like two-way binding-->
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input 
                            type='min' 
                            min='0.01' 
                            step='0.01' 
                            value={enteredAmount}   
                            onChange={amountChangeHandler}
                        />
                    </div>              
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input 
                            type='date' 
                            min='2019-01-01' 
                            max='2022-12-31' 
                            value={enteredDate} 
                            onChange={dateChangeHandler}
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button className="new-expense__button">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export defautl NewExpense

✅ ————————————————  Child-to-parent Component Comunication Botton-up  ————————————————
In this case NewExpense is a parent of NewExpenseForm (described in the last item)

NewExpense.js --->

Import React from 'react';
Import ExpenseForm from './ExpenseForm'     /*This is the child*/

const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {        <!--This function is passed via props into the child component-->
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString
        };
    }
    return (
        <div className="new-expense">
            <ExpenseForm    
                onSaveExpenseData={saveExpenseDataHandler} 
            />           
        </div>  
    )
}

export default NewExpense

- Lifting the state Up

