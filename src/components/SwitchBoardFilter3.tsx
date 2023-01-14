import React, { RefObject, useEffect, useRef, useState } from 'react';

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
let translate = 0;

const SwitchBoardFilter3: React.FC<IProps> = ({ filterData }) => {
  const [selected, setSelected] = useState(1);
  const [position, setPosition] = useState(1);

  useEffect(() => {
    // Documentation hooks as lifecycle-methods:
    // https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n
  }, []);

  const listArray: RefObject<HTMLLIElement[]> = useRef([]);

  useEffect(() => {
    if (listArray.current && listArray.current.length > 0) {
      const newPosition =
        listArray.current[selected - 1].getBoundingClientRect().x;
      setPosition(Math.ceil(newPosition));
    }
  }, [selected]);

  return (
    <ul className="inline-flex select-none overflow-hidden rounded-lg bg-slate-600">
      {filterData.map((filterItem, index) => {
        const isActive = selected === filterItem.value;
        return (
          <li
            key={filterItem.value}
            className="relative"
            ref={(el) => (listArray.current![index] = el!)}
          >
            {index === 0 && (
              <div
                className="absolute inset-0 z-50 w-full overflow-hidden rounded-lg bg-slate-300 transition-all"
                style={{ transform: `translateX(${position}px)` }}
              />
            )}
            <button
              value={filterItem.value}
              className="px-4 py-2"
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
