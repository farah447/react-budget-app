import {IncomeExpenseTypes} from './Types/componentTypes.ts';
import {ChangeEvent, FormEvent, useState} from "react";

const IncomeForm = () => {
    const [income, setIncome] = useState<IncomeExpenseTypes>({
        source: "",
        amount: 0,
        date: "",
    });

    const [incomes, setIncomes]= useState<IncomeExpenseTypes[]>([]);


    const handelChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target;
            setIncome((prevIncome) => {
                return { ...prevIncome, [name]: value};
            });
    };

    const handelSubmit = (event: FormEvent) =>{
        event.preventDefault();

        if(income.amount && income.source && income.date){
            setIncomes((prevIncomes) => [...prevIncomes, income]);
            setIncome({ source: "", amount: 0, date: "" });
        }
    };

    return (
    <div className="IncomeForm">
        <form onSubmit={handelSubmit}>
            <div>
                <label htmlFor="source"> Income source </label>
                <input type="text" 
                name="source" 
                id="source" 
                value={income.source} 
                onChange={handelChange} 
                required/>
            </div> 
            <div>
                <label htmlFor="amount"> Amount of income </label>
                <input type="number" 
                name="amount" 
                id="amount" 
                value={income.amount} 
                onChange={handelChange} 
                required/>
            </div> 
            <div>
                <label htmlFor="date"> Date of income </label>
                <input type="date" 
                name="date" 
                id="date" 
                value={income.date} 
                onChange={handelChange} 
                required/>
            </div> 
            <button type="submit">Add income</button>
        </form>
        <ul> 
            {incomes.length > 0 ? (
            incomes.map((income, index) => (
                <li key={index}>
                    {income.source}: {income.amount} EUR on {income.date} 
                </li>
            ))
            ) : (
                <p> no data for income</p>
            )} 
        </ul>
    </div>
    );
};

export default IncomeForm;