import React, { useReducer, useState } from "react";
import './ExpanseForm.css'

const ExpanseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  // receive event object from eventHandler onChange
  const titleChangeHandler = (event) => {
    // ဒီ function က ဒီ component ကို ပြန် run စေတယ်
    // ပြန် run မှ input ထဲက value ကို ကောက်ပြီး variable ထဲကို သိမ်းနိုင်မယ်
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // setUserInput((previous) => {
    //   return { ...previous, enteredTitle: event.target.value }
    // })

  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })

    // setUserInput((previous) => {
    //   return { ...previous, enteredAmount: event.target.value }
    // })
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })

    // for updating states that depend on previous states
    // setUserInput((previous) => {
    //   return { ...previous, enteredDate: event.target.value }
    // })
  }
  console.log(enteredTitle, enteredAmount, enteredDate);

  return <form>
    <div className="new-expanse__controls">
      <div className="new-expanse__control">
        <label>Title </label>

        <input type='text' onChange={titleChangeHandler} />
      </div>
      <div className="new-expanse__control">
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
      </div>
      <div className="new-expanse__control">
        <label>Date</label>
        <input type='date' min='2020-01-01' step='2025-12-31' onChange={dateChangeHandler} />
      </div>
    </div>

    <div className="new-expanse__action__container" >
      <button className="new-expanse__action__btn">Add Expanse</button>
    </div>
  </form>

}

export default ExpanseForm;