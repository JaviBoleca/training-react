import "./App.css";
import { useState } from "react";
import db from "./db/db.json";
import InputExpenses from "./components/InputExpenses";
import Expenses from "./components/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState(db);

  const addNewExpense = (expense) => {
    let newExpense = {
      category: expense.category,
      data: {
        title: expense.title,
        date: new Date(Date.now()).toLocaleDateString(),
      },
      money: {
        amount: expense.amount,
        income: expense.isIncome,
      },
    };
    setExpenses([...expenses, newExpense]);
    // opción 2
    // (prevExpenses) => {
    //   return [...prevExpenses, newExpense];
    // }
    // opción 3
    // expenses.push(newExpense);
    // return expenses;
  };

  return (
    <div className="main">
      <h1>Transactions</h1>
      <InputExpenses onNewExpense={addNewExpense} />
      <Expenses allExpenses={expenses}/>
    </div>
  );
};

export default App;
