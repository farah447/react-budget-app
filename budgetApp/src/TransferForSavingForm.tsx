import { ChangeEvent, FormEvent, useState } from 'react';


const TransferForSavingForm = (props: {
  getSavingAmount: (amount: number) => void;
  balance: number
}) => {

  const [transferAmount, setTransferAmount] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTransferAmount(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.getSavingAmount(transferAmount);
    setTransferAmount(0);
  };


  return (
    <div className="TransferForSavingForm card">
      <h3 onChange={handleChange}>Current Balance: {props.balance} </h3>
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
