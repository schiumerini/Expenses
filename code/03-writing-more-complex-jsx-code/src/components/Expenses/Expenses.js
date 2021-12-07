import { useState } from "react/cjs/react.development";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList.js";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
