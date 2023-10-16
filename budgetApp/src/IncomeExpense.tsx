import { IncomeExpenseTypes } from "./Types/componentTypes";

type IncomeExpenseProps = {
  incomes: IncomeExpenseTypes[];
  expenses: IncomeExpenseTypes[];
};

const IncomeExpense = ({ incomes, expenses }: IncomeExpenseProps) => {
  return (
    <div className="IncomeExpense">
      <h3>Incomes</h3>
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>
        {income.source} - {income.amount} EUR - {income.date}
          </li>
        ))}
      </ul>
      <h3>Expenses</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.source} - ${expense.amount} - {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeExpense;
