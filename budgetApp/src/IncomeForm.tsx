
const IncomeForm = () => {
    return (
    <div className="IncomeForm">
        <form>
            <div>
                <label htmlFor="source"> Income source </label>
                <input type="text" name="source" id="source"/>
            </div> 
            <div>
                <label htmlFor="amount"> Amount of income </label>
                <input type="number" name="amount" id="amount"/>
            </div> 
            <div>
                <label htmlFor="date"> Date of income </label>
                <input type="date" name="date" id="date"/>
            </div> 
            <button>Add income</button>
        </form>
        <ul>
            <li>Salary: 3000 EUR on Tue Oct 04 2022 </li>
            <li>Salary: 3000 EUR on Tue Sep 20 2022 </li>
        </ul>
    </div>);
}

export default IncomeForm;