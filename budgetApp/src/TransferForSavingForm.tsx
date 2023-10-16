import { ChangeEvent, FormEvent, useState } from 'react';

type TransferForSavingFormProps = {
  balance: number;
  onTransfer: (amount: number) => void; // Corrected the prop name
};

const TransferForSavingForm = ({ balance, onTransfer }: TransferForSavingFormProps) => {
  const [transferAmount, setTransferAmount] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTransferAmount(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (transferAmount <= balance) {
      onTransfer(transferAmount); // Use the onTransfer prop
      setTransferAmount(0);
    } else {
      alert('Insufficient balance for transfer');
    }
  };

  return (
    <div className="TransferForSavingForm">
      <h3>Current Balance: {balance} </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount"> Transfer For Saving Account </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={transferAmount}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default TransferForSavingForm;
