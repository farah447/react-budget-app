import {ChangeEvent, FormEvent, useState} from "react";

const TargetForSaving = () => {

  const [target, setTarget]= useState(0);


  const handelChange = (event: ChangeEvent<HTMLInputElement>)=>{
    setTarget(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) =>{
      event.preventDefault();
      setTarget(0);
  };

  return (
    <div className="TargetForSaving">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount"> Set Target For Saving </label>
                <input type="number" name="amount" id="amount" value={target} onChange={handelChange}/>
            </div> 
            <button>Reset</button>
        </form>
        <p> Current saving: 100</p>
        <p> Target: {target}</p>
        <p> Progress: 5%</p>
        <progress max={100} value={5}/>
     </div>
  );
};

export default TargetForSaving;