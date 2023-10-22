import { ChangeEvent, FormEvent, useState } from 'react';
import { IncomeExpenseTypes } from './Types/componentTypes';
import { v4 as uuidv4 } from 'uuid';

  const IncomeForm = (props: {getIncomeAmount: (amount:number) => void}) => {
    const [income, setIncome] = useState<IncomeExpenseTypes>({
      source: '',
      amount: 0,
      date: '',
      id: '',
    });

  const [incomes, setIncomes] = useState<IncomeExpenseTypes[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIncome((prevIncome) => ({
      ...prevIncome,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (income.amount > 0 && income.source && income.date) {
      const newIncome = {...income, id: uuidv4()
      }
      setIncomes((prevIncomes) => [...prevIncomes, newIncome]);
      props.getIncomeAmount(income.amount);
    } else {
      alert('Invalid input. Amount must be a positive number.');
    }
  };

  const handleDelete = (id: string) => {
    const deletedIncome = incomes.find((income) => income.id === id);
    if (deletedIncome) {
      setIncomes((prevIncomes) => prevIncomes.filter((income) => income.id !== id));
    }
  }
  
  return (
    <div className="IncomeForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source"> Income source </label>
          <input
            type="text"
            name="source"
            id="source"
            value={income.source}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add income</button>
      </form>
      <ul>
        {incomes.length > 0 ? (
          incomes.map((income, index) => (
            <li key= {index}>
              {income.source} : {income.amount} EUR on {income.date}
              <button onClick={() => {handleDelete(income.id)}}>Delete</button>
            </li>
          ))
        ) : (
          <p>No data for income</p>
        )}
      </ul>
    </div>
  );
};

export default IncomeForm;
