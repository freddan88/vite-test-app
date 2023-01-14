import React, { MouseEvent, useEffect, useState } from 'react';

interface switchBoardProps {
  label: string;
  value: number;
}

interface IProps {
  filterName: string;
  filterData: switchBoardProps[];
  filterValue?: number;
  onFilterChange?: (value: any) => void;
}

let isCanceled = false;

const SwitchBoardFilter2: React.FC<IProps> = ({
  filterName,
  filterData,
  filterValue,
  onFilterChange,
}) => {
  const [selected, setSelected] = useState(filterValue || 1);

  const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const { name, value } = button;
    const newValue = parseInt(value);
    if (onFilterChange) onFilterChange(newValue);
    setSelected(newValue);
  };

  useEffect(() => {
    if (!isCanceled && filterValue && onFilterChange) {
      onFilterChange(filterValue);
      console.log(filterName);
    }
    return () => {
      isCanceled = true;
    };
  }, []);

  return (
    <ul className="inline-flex rounded-lg border-2 border-slate-800 bg-slate-400">
      {filterData.map((filterItem) => {
        const activeStyle =
          selected === filterItem.value
            ? 'after:scale-x-1 after:opacity-80'
            : 'after:scale-x-0 after:opacity-0';
        return (
          <li
            key={filterItem.value}
            className={`after:scale-y-1 after:outline-solid relative after:absolute after:inset-0 after:origin-top-left after:rounded-lg after:outline after:outline-4 after:outline-blue-400 after:transition-all after:duration-300 ${activeStyle}`.trim()}
          >
            <button
              type="button"
              name={filterName}
              className="px-4 py-2"
              value={filterItem.value}
              onClick={handleChange}
            >
              {filterItem.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SwitchBoardFilter2;
