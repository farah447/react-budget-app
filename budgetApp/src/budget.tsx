import { useState } from 'react';

import IncomeForm from './IncomeForm';
import ExpenseForm from './ExpenseForm';
import TargetForSaving from './TargetForSaving';
import TransferForSavingForm from './TransferForSavingForm';

const Budget = () => {

    const [savingAmount, setSavingAmount] = useState(0);
    const [incomeAmount, setIncomeAmount] = useState(0);
    const [expenseAmount, setExpenseAmount] = useState(0);
    const currentBalance = incomeAmount - (expenseAmount + savingAmount);

    const getSavingAmount = (amount: number) => {
        setSavingAmount((prevAmount) => prevAmount + amount);
    };

    const getIncomeAmount = (amount: number) => {
        setIncomeAmount((prevAmount) => prevAmount + Number(amount));
    };

    const getExpenseAmount = (amount: number) => {
        console.log(amount);
        setExpenseAmount((prevAmount) => prevAmount + Number(amount));
    };

    return (
        <div>
            <h1>Budget App</h1>
            <IncomeForm getIncomeAmount={getIncomeAmount}></IncomeForm>
            <ExpenseForm getExpenseAmount={getExpenseAmount}></ExpenseForm>
            <TargetForSaving savingAmount={savingAmount}></TargetForSaving>
            <TransferForSavingForm
                getSavingAmount={getSavingAmount}
                balance={currentBalance}
            ></TransferForSavingForm>
        </div>
    );
};

export default Budget;


