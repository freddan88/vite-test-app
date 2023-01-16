import React, { ChangeEvent, useEffect, useState } from 'react';

interface IProps {}

const boardData = [
  {
    label: 'Alla',
    value: 'all',
  },
  {
    label: 'Aktiva',
    value: 'active',
  },
  {
    label: 'Inaktiva',
    value: 'inactive',
  },
];

const SwitchBoardFilter4: React.FC<IProps> = (props) => {
  const [selected, setSelected] = useState<any>(boardData[0]);

  console.log(selected);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, label: string) => {
    const { name, value } = e.target;
    const clickedElement = e.target as HTMLInputElement;
    const labelElement = clickedElement.previousElementSibling!;
    const newPosition = labelElement.getBoundingClientRect().x;
    const newSelection = {
      name,
      value,
      label,
      positionX: newPosition,
    };
    setSelected(newSelection);
  };

  useEffect(() => {
    // Documentation hooks as lifecycle-methods:
    // https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n
  }, []);

  return (
    <div className="relative inline-block overflow-hidden rounded-lg bg-slate-300 p-1">
      <div
        className="absolute rounded-lg bg-slate-100 py-2 px-4 leading-none text-green-500 shadow-lg transition-all"
        style={{ left: `${selected.positionX}px` }}
      >
        {selected.label}
      </div>
      <ul className="flex">
        {boardData.map((obj) => {
          return (
            <li
              className="border-r border-slate-400 after:bg-slate-400 last-of-type:border-none"
              key={obj.value}
            >
              <label
                className="block cursor-pointer py-2 px-4 leading-none"
                htmlFor={obj.value}
              >
                {obj.label}
              </label>
              <input
                type="radio"
                id={obj.value}
                value={obj.value}
                name="switchBoard4"
                className="hidden"
                onChange={(e) => handleChange(e, obj.label)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SwitchBoardFilter4;
