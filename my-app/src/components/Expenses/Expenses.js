import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // ရွေးထားတဲ့ date ပေါ်မူတည်ပြီး စစ်ထုတ်ထားတဲ့ Expense Array
  const filteredExpense = props.items.filter((expense) => expense.date.getFullYear() == filteredYear
  );
  const defaultContent = <p className='default-content'>No Expense On this year.</p>;
  const showFilteredArray = filteredExpense.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);

  return (

    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ul>
          {filteredExpense.length == 0 && defaultContent}
          {filteredExpense.length > 0 && showFilteredArray}
        </ul>


      </Card>
    </div>

  );
};

export default Expenses;
