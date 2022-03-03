import ExpanseDate from "./ExpanseDate";
import Card from './Card';
import "./ExpanseItem.css";

// props method accept all incoming properties from other Components
export default function ExpanseItem(props) {

  // HTML liked JSX codes
  return (
    <Card className="expanse-item">
      <ExpanseDate date={props.date} />
      <div className="expanse-item-des">
        <h2>{props.title}</h2>
        <div>${props.amount}</div>
      </div>
    </Card>
  );
}
