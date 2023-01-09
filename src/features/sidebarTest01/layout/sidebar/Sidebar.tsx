import { FC, Fragment, useState } from 'react';
import MenuItem from './MenuItem';
import { menuData } from './sidebarData';

interface IProps {}

const Sidebar: FC<IProps> = (props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [activeSubMenu, setActiveSubMenu] = useState('');

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`bg-slate-800 text-slate-50 transition-all ${
        expanded ? 'w-[240px]' : 'w-[40px]'
      }`}
    >
      <ul>
        {menuData.map((obj, index) => {
          if (obj.pageLink)
            return (
              <li key={index} className="hover:bg-slate-400">
                <MenuItem
                  iconPath={obj.iconPath}
                  itemLabel={obj.itemLabel}
                  pageLink={obj.pageLink}
                  setActiveSubMenu={setActiveSubMenu}
                />
              </li>
            );
          if (obj.subMenu) {
            return (
              <li
                key={index}
                className={`${
                  activeSubMenu === obj.itemLabel ? 'bg-slate-600' : ''
                } relative hover:bg-slate-400`}
              >
                <MenuItem
                  iconPath={obj.iconPath}
                  itemLabel={obj.itemLabel}
                  setActiveSubMenu={setActiveSubMenu}
                />
                <ul className="overflow-hidden bg-slate-800">
                  {obj.subMenu.map((subObj, index) => (
                    <li
                      className={`hover:bg-slate-400 ${
                        activeSubMenu === obj.itemLabel
                          ? 'h-auto bg-slate-600'
                          : 'h-0'
                      }`}
                      key={index}
                    >
                      <MenuItem
                        iconPath={subObj.iconPath}
                        itemLabel={subObj.itemLabel}
                        pageLink={subObj.pageLink}
                      />
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
