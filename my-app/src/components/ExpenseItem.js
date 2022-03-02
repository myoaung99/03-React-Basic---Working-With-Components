import "./ExpanseItem.css";

export default function ExpanseItem(props) {

  return (
    <div className="expanse-item">
      <div className="expanse-item-date">{props.date}</div>
      <div className="expanse-item-des">
        <h2>{props.title}</h2>
        <div>${props.amount}</div>
      </div>
    </div>
  );
}
