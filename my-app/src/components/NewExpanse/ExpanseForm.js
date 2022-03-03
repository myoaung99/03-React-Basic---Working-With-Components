import React from "react";
import './ExpanseForm.css'

const ExpanseForm = () => {
  return <form>
    <div className="new-expanse__controls">
      <div className="new-expanse__control">
        <label>Title </label>
        <input type='text' />
      </div>
      <div className="new-expanse__control">
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' />
      </div>
      <div className="new-expanse__control">
        <label>Date</label>
        <input type='date' min='2020-01-01' step='2025-12-31' />
      </div>
    </div>

    <div className="new-expanse__action__container" >
      <button className="new-expanse__action__btn">Add Expanse</button>
    </div>
  </form>

}

export default ExpanseForm;