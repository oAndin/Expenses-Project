<<<<<<< HEAD
import ExpensesList from "./Components/ExpensesList/Index";
import NewExpense from "./Components/NewExpense/Index";
import './index.css'; 
=======
import ExpensesList from './Components/ExpensesList/Index'

import './index.css';
>>>>>>> 09f3b299c655777b564c558a598920a4c5cab369
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <>
<<<<<<< HEAD
      <NewExpense/>
      <ExpensesList items={expenses}/>
=======
      <h2>Lets get started</h2>
      <ExpensesList items={expenses} />
>>>>>>> 09f3b299c655777b564c558a598920a4c5cab369
    </>
  );
}

export default App;
