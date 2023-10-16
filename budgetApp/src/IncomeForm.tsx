import React, { ChangeEvent, FormEvent, useState } from 'react';
import { IncomeExpenseTypes } from './Types/componentTypes';

type IncomeFormProps = {
    setIncomes: React.Dispatch<React.SetStateAction<IncomeExpenseTypes[]>>;
    onDeleteIncome: (id: string) => void;
    currentBalance: number; // Add the currentBalance prop
  };
  
  const IncomeForm = ({ setIncomes, onDeleteIncome, currentBalance }: IncomeFormProps) => {
    const [income, setIncome] = useState<IncomeExpenseTypes>({
      source: '',
      amount: 0,
      date: '',
      id: '', // Added 'id' property
    });

  const [incomes] = useState<IncomeExpenseTypes[]>([]);

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIncome((prevIncome) => ({
      ...prevIncome,
      [name]: value,
    }));
  };

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (income.amount > 0 && income.source && income.date) {
      setIncomes((prevIncomes) => [...prevIncomes, income]);
      setIncome({ source: '', amount: 0, date: '', id: '' });
    } else {
      alert('Invalid input. Amount must be a positive number.');
    }
  };

  return (
    <div className="IncomeForm">
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="source"> Income source </label>
          <input
            type="text"
            name="source"
            id="source"
            value={income.source}
            onChange={handelChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount"> Amount of income </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={income.amount}
            onChange={handelChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date"> Date of income </label>
          <input
            type="date"
            name="date"
            id="date"
            value={income.date}
            onChange={handelChange}
            required
          />
        </div>
        <button type="submit">Add income</button>
      </form>
      <ul>
        {incomes.length > 0 ? (
          incomes.map((income) => (
            <li key={income.id}>
              {income.source} - {income.amount} EUR on {income.date}
              <button onClick={() => onDeleteIncome(income.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No data for income</p>
        )}
      </ul>
      <h3>Current Balance: {currentBalance} EUR</h3>
    </div>
  );
};

export default IncomeForm;
