import React, {
  MouseEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

interface IProps {
  value?: string;
}

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

let prevValue = '';

const SwitchBoardFilter5: React.FC<IProps> = ({ value }) => {
  const [selected, setSelected] = useState<any>();

  const listArray: RefObject<HTMLLIElement[]> = useRef([]);

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    const element = e.target as HTMLLIElement;
    setSelected({
      value: element.id,
      label: element.textContent!,
      left: element.offsetLeft,
      width: element.clientWidth,
    });
  };

  useEffect(() => {
    if (listArray.current) {
      if (prevValue === value) return;
      const initialValue = value || boardData[0].value;
      const initialIndex = boardData.findIndex(
        (item) => item.value === initialValue
      );
      const initialItem = listArray.current[initialIndex];
      prevValue = initialItem.id;
      setSelected({
        value: initialItem.id,
        label: initialItem.textContent!,
        left: initialItem.offsetLeft,
        width: initialItem.clientWidth,
      });
    }
  }, [value]);

  return (
    <div className="relative inline-flex h-8 items-center rounded-lg bg-slate-300 px-1 leading-none">
      {selected && (
        <div
          className="absolute top-0 bottom-0 my-1 flex select-none items-center justify-center overflow-hidden rounded-lg bg-slate-100 leading-none text-green-400 transition-all"
          style={{
            width: selected.width,
            left: selected.left,
          }}
        >
          {selected.label}
        </div>
      )}
      <ul className="flex h-[18px] cursor-pointer">
        {boardData.map((obj, index) => {
          return (
            <li
              key={obj.value}
              className="border-r border-slate-400 px-2 last-of-type:border-none"
              ref={(el) => (listArray.current![index] = el!)}
              onClick={handleClick}
              id={obj.value}
            >
              {obj.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SwitchBoardFilter5;
