import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  // Initial state of selected multiple choice
  const [filteredYear, setFilteredYear] = useState('2020');

  // set state for year from child comp...
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // ရွေးထားတဲ့ date ပေါ်မူတည်ပြီး စစ်ထုတ်ထားတဲ့ Expense Array
  const filteredExpense = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear
  );

  // No result content
  const defaultContent = <p className='default-content'>No Expense On this year.</p>;

  // show content that is coming from list
  const showFilteredArray = filteredExpense.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);

  // expenseFilter is control component cuz its data are controlled from parent
  return (

    <Card className='expenses'>

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpense} />
      <ul>
        {filteredExpense.length === 0 && defaultContent}
        {filteredExpense.length > 0 && showFilteredArray}
      </ul>
    </Card>


  );
};

export default Expenses;
