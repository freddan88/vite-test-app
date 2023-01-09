import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  menuPosition: number;
}

const TableContextMenu: FC<IProps> = ({ menuPosition }) => {
  return (
    <ul
      className="absolute z-50 select-none whitespace-nowrap rounded-md bg-slate-100 py-4"
      style={{ top: `${menuPosition - 4}px`, right: `${menuPosition - 4}px` }}
    >
      <li className="cursor-pointer py-1 px-2 hover:bg-slate-200">Edit</li>
      <li className="cursor-pointer py-1 px-2 hover:bg-slate-200">Logs</li>
      <li
        onClick={() => console.log('Delete')}
        className="cursor-pointer py-1 px-2 hover:bg-slate-200"
      >
        Delete
      </li>
      <li>
        <Link
          className="block cursor-pointer py-1 px-2 hover:bg-slate-200"
          to="/sidebar-test-01"
        >
          Sidebar-test-01
        </Link>
      </li>
      <li>
        <Link
          className="block cursor-pointer py-1 px-2 hover:bg-slate-200"
          to="/"
        >
          Home
        </Link>
      </li>
    </ul>
  );
};

export default TableContextMenu;
