import {ChangeEvent, FormEvent, useState} from "react";
import {IncomeExpenseTypes} from './Types/componentTypes.ts';

const ExpenseForm = () => {
        const [expense, setExpense] = useState<IncomeExpenseTypes>({
            source: '',
            amount: 0,
            date: '',
        });
    
        const [expenses, setExpenses]= useState<IncomeExpenseTypes[]>([]);
    
    
        const handelChange = (event: ChangeEvent<HTMLInputElement>)=>{
            const {name, value} = event.target;
            if(expense.amount && expense.source && expense.date){
                setExpense((prevExpenses) => {
                    return {...prevExpenses,[name]: value};
                });
            }
        };
    
        const handleSubmit = (event: FormEvent) =>{
            event.preventDefault();
            if(expense.amount && expense.source && expense.date){
                setExpenses((prevExpenses) => {
                    return {...prevExpenses, expenses};
                });
            }
        };

    return (
    <div className="ExpenseForm"> 
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="source"> Expense source </label>
                <input type="text" name="source" id="source" value={expense.source} onChange={handelChange} required/>
            </div> 
            <div>
                <label htmlFor="amount"> Amount of expense </label>
                <input type="number" name="amount" id="amount" value={expense.amount} onChange={handelChange} required/>
            </div> 
            <div>
                <label htmlFor="date"> Date of expense </label>
                <input type="date" name="date" id="date" value={expense.date} onChange={handelChange} required/>
            </div> 
            <button>Add expense</button>
        </form>
        <ul> 
            { expenses.length > 0 ? (
            expenses.map((expense, index) => (
                <li key={index}>
                    {expense.source}: {expense.amount} EUR on {expense.date} 
                </li>
            ))
            ):(
                <p> no data for income</p>
            )} 
        </ul>
     </div>);
}

export default ExpenseForm;