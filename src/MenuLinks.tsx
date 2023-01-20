import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  menuPosition: number;
}

const MenuLinks: FC<IProps> = ({ menuPosition }) => {
  return (
    <div
      className="absolute z-50 select-none whitespace-nowrap rounded-md bg-slate-100 py-4"
      style={{ top: `${menuPosition - 4}px`, right: `${menuPosition - 4}px` }}
    >
      <ul>
        <li>
          <Link
            className="block cursor-pointer py-1 px-2 hover:bg-slate-200"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="block cursor-pointer py-1 px-2 hover:bg-slate-200"
            to="/switchboards-test-01"
          >
            SwitchBoards
          </Link>
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
            to="/notification-test-01"
          >
            Notifications-01
          </Link>
        </li>
        <li>
          <Link
            className="block cursor-pointer py-1 px-2 hover:bg-slate-200"
            to="/react-table-test-01"
          >
            React Table Test 01
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuLinks;
