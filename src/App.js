import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Paper Cups",
    amount: 700,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Ice", amount: 400, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Mangos",
    amount: 500,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Lunch",
    amount: 1000,
    date: new Date(2021, 5, 12),
  },
];
function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  

  const addExpenseHandler = (expense) => {
   setExpenses((prevExpenses)=>{
    return[expense,...prevExpenses]
   })
    console.log("in App js");
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
