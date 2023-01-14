import React, { useEffect, useState } from 'react';

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

const SwitchBoardFilter3: React.FC<IProps> = ({ filterData }) => {
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    // Documentation hooks as lifecycle-methods:
    // https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n
  }, []);

  console.log(selected);

  return (
    <ul className="inline-flex select-none rounded-lg bg-slate-600">
      {filterData.map((filterItem) => {
        const isActive = selected === filterItem.value;
        return (
          <li
            key={filterItem.value}
            className={`relative after:absolute after:inset-0 after:z-10 after:origin-top-left after:bg-slate-200 after:transition-all`}
          >
            <button
              value={filterItem.value}
              className="w-full px-8 py-4"
              onClick={() => setSelected(filterItem.value)}
            >
              {filterItem.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SwitchBoardFilter3;
