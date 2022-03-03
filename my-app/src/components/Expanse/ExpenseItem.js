import React, { useState } from 'react';
import ExpanseDate from "./ExpanseDate";
import Card from '../UI/Card';
import "./ExpanseItem.css";

// props method accept all incoming properties from other Components
export default function ExpanseItem(props) {

  // useState return the variable and method to change that variable
  // and useState will re-excute the component where it is used
  // when the Key variable is changed
  const [title, setTitle] = useState(props.title);

  // Normal EventHandler
  const clickHandler = () => {
    // method that comes from useState
    setTitle('Updated')
  }

  // HTML liked JSX codes
  return (
    <Card className="expanse-item">
      <ExpanseDate date={props.date} />
      <div className="expanse-item-des">
        <h2>{title}</h2>
        <div>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Me</button>
    </Card >
  );
}
