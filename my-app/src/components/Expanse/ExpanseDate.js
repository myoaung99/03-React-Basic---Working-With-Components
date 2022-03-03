import React from 'react';
import './ExpanseDate.css';
function ExpanseDate(props) {
  // Sepreating Js date logic from JSX syntax
  // toLocal'e'String E ကို မေမ့နဲ့ 
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="date-container">
      <div className="date-month">{month}</div>
      <div className="date-day">{day}</div>
      <div className="date-year">{year}</div>
    </div>
  )
}

export default ExpanseDate;