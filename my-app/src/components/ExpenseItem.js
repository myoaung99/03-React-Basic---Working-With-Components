import "./ExpanseItem.css";

export default function ExpanseItem(props) {

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expanse-item">
      <div className="expanse-item-date">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expanse-item-des">
        <h2>{props.title}</h2>
        <div>${props.amount}</div>
      </div>
    </div>
  );
}
