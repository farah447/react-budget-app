import { ChangeEvent, FormEvent, useState } from 'react';

type TargetForSavingProps = {
  saving: number;
  setTargetSaving: (targetSaving: number) => void; // Corrected the prop name
};

const TargetForSaving = ({ saving, setTargetSaving }: TargetForSavingProps) => {
  const [target, setTarget] = useState(0);

  const progress = target === 0 ? 0 : (saving / target) * 100;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTargetSaving(target);
    setTarget(0);
  };

  return (
    <div className='TargetForSaving'>
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
        <button type="submit">Reset</button>
      </form>
      <p>Current saving: {saving}</p>
      <p>Target: {target}</p>
      <p>Progress: {isNaN(progress) ? 0 : Math.round(progress)}%</p>
      <progress max={100} value={isNaN(progress) ? 0 : Math.round(progress)} />
    </div>
  );
};

export default TargetForSaving;
