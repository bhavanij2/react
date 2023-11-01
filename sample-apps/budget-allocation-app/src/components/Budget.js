import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((totalExpenses, currentExpense) => {
    return (totalExpenses += currentExpense.cost);
  }, 0);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const newBudget = event.target.value;
    if (newBudget < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
      return;
    }
    setNewBudget(event.target.value);
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
        style={{ float: "right", size: 10 }}
      ></input>
    </div>
  );
};
export default Budget;
