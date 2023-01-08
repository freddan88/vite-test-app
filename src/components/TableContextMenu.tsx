import { FC } from 'react';

interface IProps {
  menuPosition: number;
}

const TableContextMenu: FC<IProps> = ({ menuPosition }) => {
  return (
    <ul
      className="absolute z-50 select-none rounded-md bg-slate-100 py-4"
      style={{ top: `${menuPosition - 4}px`, right: `${menuPosition - 4}px` }}
    >
      <li className="cursor-pointer py-1 px-2 hover:bg-slate-200">Edit</li>
      <li className="cursor-pointer py-1 px-2 hover:bg-slate-200">Logs</li>
      <li className="cursor-pointer py-1 px-2 hover:bg-slate-200">Delete</li>
    </ul>
  );
};

export default TableContextMenu;
