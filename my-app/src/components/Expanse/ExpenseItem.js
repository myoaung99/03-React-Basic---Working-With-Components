import React from 'react';
import ExpanseDate from "./ExpanseDate";
import Card from '../UI/Card';
import "./ExpanseItem.css";

// props method accept all incoming properties from other Components
export default function ExpanseItem(props) {

  let title = props.title;

  const clickHandler = () => {
    title = "Updated"
    console.log(title);
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
