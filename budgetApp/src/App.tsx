import { useState, useEffect } from "react";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import TargetForSaving from "./TargetForSaving";
import TransferForSavingForm from "./TransferForSavingForm";
import IncomeExpense from "./IncomeExpense";
import { IncomeExpenseTypes } from "./Types/componentTypes";

const App = () => {
  const [incomes, setIncomes] = useState<IncomeExpenseTypes[]>([]);
  const [expenses, setExpenses] = useState<IncomeExpenseTypes[]>([]);
  const [currentBalance, setCurrentBalance] = useState<number>(0);

  useEffect(() => {
    const incomeTotal = incomes.reduce((total, income) => total + income.amount, 0);
    const expenseTotal = expenses.reduce((total, expense) => total + expense.amount, 0);
    const balance = incomeTotal - expenseTotal;
    setCurrentBalance(balance);
  }, [incomes, expenses]);

  const handleTransfer = (amount: number) => {
    setCurrentBalance((prevBalance) => prevBalance + amount);
  };

  const handleDeleteIncome = (id: string) => {
    setIncomes((prevIncomes) => prevIncomes.filter((income) => income.id !== id));
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <IncomeForm
        setIncomes={setIncomes}
        onDeleteIncome={handleDeleteIncome}
        currentBalance={currentBalance} 
      />
      <ExpenseForm setExpenses={setExpenses} onDeleteExpense={handleDeleteExpense} />
      <TargetForSaving
        saving={currentBalance}
        setTargetSaving={setCurrentBalance}
      />
      <TransferForSavingForm balance={currentBalance} onTransfer={handleTransfer} />
      <IncomeExpense incomes={incomes} expenses={expenses} />
    </div>
  );
};

export default App;

