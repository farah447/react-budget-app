import {ChangeEvent, FormEvent, useState} from "react";

const TransferForSavingForm = () => {

  const [transferAmount, setTransferAmount]= useState(0);
  
  
  const handelChange = (event: ChangeEvent<HTMLInputElement>)=>{
    setTransferAmount(Number(event.target.value));
  };

  const handelSubmit = (event: FormEvent) =>{
      event.preventDefault();
      setTransferAmount(0);
  };

  return (
    <div className="TransferForSavingForm">
        <h3>Current Balance: 5930 </h3> 
        <form onSubmit={handelSubmit}>
            <div>
                <label htmlFor="amount"> Transfer For Saving Account </label>
                <input type="number" name="amount" id="amount" value={transferAmount} onChange={handelChange}/>
            </div> 
            <button type="submit">Transfer</button>
        </form>
    </div>
  );
};

export default TransferForSavingForm;