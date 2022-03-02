function ExpanseDate(props) {
  // Sepreating Js date logic from JSX syntax
  // toLocal'e'String E ကို မေမ့နဲ့ 
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();



  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  )
}

export default ExpanseDate;