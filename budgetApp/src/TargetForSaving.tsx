import { ChangeEvent, FormEvent, useState } from 'react';


const TargetForSaving = (props: { savingAmount: number }) => {
  const [target, setTarget] = useState(0);

  const progress = () => {
    if (target) {
      return (props.savingAmount / target) * 100;
    } else {
      return 0;
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTarget(0);
  };

  const handleReset = () => {
    setTarget(0);
  };

  return (
    <div className='TargetForSaving card'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Set Target For Saving</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={target}
            onChange={handleChange}
          />
        </div>
      </form>
      <button type="button" onClick={handleReset}>Reset</button>
      <p>Current saving: {props.savingAmount}</p>
      <p>Target: {target}</p>
      <p>Progress: {progress()}%</p>
      <progress max={target} value={props.savingAmount}></progress>
    </div>
  );
};

export default TargetForSaving;
