import logo from "./logo.svg";
import "./App.css";
import ExpanseItem from "./components/ExpenseItem";
import Card from './components/Card'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  // to show data dynamically create seprate data
  const expanse = [
    { id: 'e1', title: 'Headphone', amount: '453.12', date: new Date(2022, 2, 2) },
    { id: 'e2', title: 'Mouse', amount: '200.12', date: new Date(2022, 2, 1) },
    { id: 'e3', title: 'Keyboard', amount: '100.12', date: new Date(2021, 4, 2) },
  ];

  // add custom properties name to custom Components
  // small letter JSX elements are default components
  // Capital Letter JSX elements are Custom Components
  return (

    <Card className="expanse-container">
      <ExpanseItem title={expanse[0].title} amount={expanse[0].amount} date={expanse[0].date} />
      <ExpanseItem title={expanse[1].title} amount={expanse[1].amount} date={expanse[1].date} />
      <ExpanseItem title={expanse[2].title} amount={expanse[2].amount} date={expanse[2].date} />
    </Card>

  );
}

export default App;
