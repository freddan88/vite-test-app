import { ChangeEvent, useEffect, useState } from 'react';

interface switchBoardProps {
  label: string;
  value: number;
}

interface IProps {
  name: string;
  data: switchBoardProps[];
  onChange?: (value: number) => void;
  value?: number;
}

let isCanceled = false;

const SwitchBoardFilter1: React.FC<IProps> = ({
  data,
  name,
  value,
  onChange,
}) => {
  const [boardValue, setBoardValue] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    onChange && onChange(newValue);
    setBoardValue(newValue);
    console.log(name);
  };

  useEffect(() => {
    if (!isCanceled && value && onChange) {
      onChange(value);
      console.log(name);
    }
    return () => {
      isCanceled = true;
    };
  }, []);

  return (
    <div className="inline-flex overflow-hidden rounded-lg border-2 border-slate-900 bg-slate-400">
      {data.map((obj) => {
        const isActive = obj.value === boardValue;
        return (
          <label
            className={`${
              isActive
                ? 'border-blue-400 bg-slate-300'
                : 'border-slate-400 bg-slate-400'
            } relative block cursor-pointer select-none rounded-lg border-2 px-4 py-2 hover:bg-slate-300`}
            key={obj.value}
          >
            {obj.label}
            <input
              name={name}
              type="radio"
              value={obj.value}
              className="hidden"
              onChange={handleChange}
            />
          </label>
        );
      })}
    </div>
  );
};

export default SwitchBoardFilter1;
