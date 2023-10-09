
const TargetForSaving = () => {
  return (
    <div className="TargetForSaving">
        <form>
            <div>
                <label htmlFor="amount"> Set Target For Saving </label>
                <input type="number" name="amount" id="amount"/>
            </div> 
            <button>Reset</button>
        </form>
        <p> Current saving: 100</p>
        <p> Target: 2000</p>
        <p> Progress: 5%</p>
        <progress max={100} value={5}/>
     </div>
  );
};

export default TargetForSaving;