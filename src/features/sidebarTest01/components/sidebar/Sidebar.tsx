import Icon from '@mdi/react';
import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { menuData } from './sidebarData';

interface IProps {}

const Sidebar: FC<IProps> = (props) => {
  const [activeSubMenu, setActiveSubMenu] = useState('');

  useEffect(() => {
    // Documentation hooks as lifecycle-methods:
    // https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n
  }, []);

  return (
    <nav>
      <h1>Logo</h1>
      <ul className="m-0 p-0">
        {menuData.map((obj) => {
          if (obj.link) {
            return (
              <li key={obj.link} className="m-0 bg-green-300">
                <NavLink
                  to={obj.link}
                  className="flex items-center gap-2 p-2 pr-4"
                  onClick={() => setActiveSubMenu('')}
                >
                  <Icon path={obj.iconPath} size={1.5} />
                  {obj.label}
                </NavLink>
              </li>
            );
          }
          if (obj.subMenu) {
            return (
              <li key={obj.subMenu[0].link} className="m-0 bg-green-300">
                <button
                  type="button"
                  className="flex items-center gap-2 p-2 pr-4"
                  onClick={() =>
                    setActiveSubMenu((prevValue) => {
                      if (prevValue === obj.label) return '';
                      return obj.label;
                    })
                  }
                >
                  <Icon path={obj.iconPath} size={1.5} />
                  {obj.label}
                </button>
                <ul className="m-0 p-0">
                  {obj.subMenu.map((obj) => {
                    const isActive = activeSubMenu === obj.parentLabel;
                    return (
                      <li
                        key={obj.link}
                        className={`m-0 overflow-hidden ${
                          isActive ? 'h-auto' : 'h-0'
                        } `}
                      >
                        <NavLink
                          to={obj.link}
                          className="flex items-center gap-2 py-2 pl-2"
                        >
                          <Icon path={obj.iconPath} size={1.5} />
                          {obj.label}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }
        })}
      </ul>
      <button type="button">Logout</button>
    </nav>
  );
};

export default Sidebar;
