import React, { ChangeEvent, FormEvent, useState } from 'react';
import { IncomeExpenseTypes } from './Types/componentTypes';

type ExpenseFormProps = {
  setExpenses: React.Dispatch<React.SetStateAction<IncomeExpenseTypes[]>>;
  onDeleteExpense: (id: string) => void; 
}

const ExpenseForm = ({ setExpenses, onDeleteExpense }: ExpenseFormProps) => {
    const [expense, setExpense] = useState<IncomeExpenseTypes>({
    source: '',
    amount: 0,
    date: '',
    id: '', 
  });

  const [expenses] = useState<IncomeExpenseTypes[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExpense((prevExpenses) => ({
      ...prevExpenses,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (expense.amount > 0 && expense.source && expense.date) {
      setExpenses((prevExpenses) => [...prevExpenses, expense]);
      setExpense({ source: '', amount: 0, date: '', id: '' });
    } else {
      alert('Invalid input. Amount must be a positive number.');
    }
  };

  return (
    <div className="ExpenseForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source"> Expense source </label>
          <input
            type="text"
            name="source"
            id="source"
            value={expense.source}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount"> Amount of expense </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date"> Date of expense </label>
          <input
            type="date"
            name="date"
            id="date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add expense</button>
      </form>
      <ul>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <li key={expense.id}>
              {expense.source} - {expense.amount} EUR on {expense.date}
              <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No data for expenses</p>
        )}
      </ul>
    </div>
  );
};

export default ExpenseForm;
