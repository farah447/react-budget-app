
const ExpenseForm = () => {
    return (
    <div className="ExpenseForm"> 
        <form>
            <div>
                <label htmlFor="source"> Expense source </label>
                <input type="text" name="source" id="source"/>
            </div> 
            <div>
                <label htmlFor="amount"> Amount of expense </label>
                <input type="number" name="amount" id="amount"/>
            </div> 
            <div>
                <label htmlFor="date"> Date of expense </label>
                <input type="date" name="date" id="date"/>
            </div> 
            <button>Add expense</button>
        </form>
        <ul>
            <li>Water bill: 50 EUR on Tue Oct 04 2022 </li>
            <li>Phone bill: 20 EUR on Fri Sep 23 2022 </li>
        </ul>
     </div>);
}

export default ExpenseForm;