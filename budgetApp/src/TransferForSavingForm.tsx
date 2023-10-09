
const TransferForSavingForm = () => {
  return (
    <div className="TransferForSavingForm">
        <h3>Current Balance: 5930 </h3> 
        <form>
            <div>
                <label htmlFor="amount"> Transfer For Saving Account </label>
                <input type="number" name="amount" id="amount"/>
            </div> 
            <button>Transfer</button>
        </form>
    </div>
  )
}

export default TransferForSavingForm;