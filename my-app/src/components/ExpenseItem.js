import ExpanseDate from "./ExpanseDate";
import "./ExpanseItem.css";

// props method accept all incoming properties from other Components
export default function ExpanseItem(props) {

  // Sepreating Js date logic from JSX syntax
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  // HTML liked JSX codes
  return (
    <div className="expanse-item">

      <ExpanseDate date={props.date} />

      <div className="expanse-item-des">
        <h2>{props.title}</h2>
        <div>${props.amount}</div>
      </div>
    </div>
  );
}
