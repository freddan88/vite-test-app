import { mdiMenuSwap } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuList from './components/MenuList';
import MenuListItem from './components/MenuListItem';
import MenuListItemText from './components/MenuListItemText';
import { menuData, navigationItem, subMenuItem } from './sidebarData';

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [activeSubMenu, setActiveSubMenu] = useState('');

  const sideBarWidth = expanded ? 240 : 40;

  const renderNavigationItem = (itemData: navigationItem, subMenu: boolean) => {
    const { iconPath, itemLabel, pageLink } = itemData;
    return (
      <MenuListItem key={itemLabel}>
        <NavLink
          to={pageLink}
          className="flex w-full py-2 hover:bg-slate-400"
          onClick={() => {
            if (!subMenu) setActiveSubMenu('');
          }}
        >
          <Icon path={iconPath} size={1} className="mx-2" />
          <MenuListItemText label={itemLabel} />
        </NavLink>
      </MenuListItem>
    );
  };

  const renderSubMenuItem = (itemData: subMenuItem) => {
    const { iconPath, itemLabel, subMenu } = itemData;
    const isActive = activeSubMenu === itemLabel;
    const isClosed = expanded === false;
    const subListHeight = isActive ? 'auto' : 0;
    return (
      <MenuListItem isActive={isActive} key={itemLabel}>
        <button
          className="flex w-full py-2 hover:bg-slate-400"
          onClick={() =>
            setActiveSubMenu((prevValue) => {
              if (prevValue === itemLabel) return '';
              return itemLabel;
            })
          }
        >
          <Icon path={iconPath} size={1} className="mx-2" />
          <span className="flex-1 overflow-hidden whitespace-nowrap text-left">
            {itemLabel}
          </span>
        </button>
        <MenuList
          isSubMenu
          isClosed={isClosed}
          isActive={isActive}
          height={subListHeight}
          onClick={() => {
            if (isClosed) setActiveSubMenu('');
          }}
        >
          {subMenu.map((subItem) => {
            return renderNavigationItem(subItem, true);
          })}
        </MenuList>
      </MenuListItem>
    );
  };

  return (
    <aside
      className="bg-slate-800 text-slate-50 transition-all"
      style={{ width: `${sideBarWidth}px` }}
    >
      <button
        className="flex h-[40px] w-[40px] items-center justify-center"
        onClick={() => setExpanded((prevValue) => !prevValue)}
      >
        <Icon path={mdiMenuSwap} rotate={90} size={1} />
      </button>
      <MenuList>
        {menuData.map((obj) => {
          if (obj.pageLink) return renderNavigationItem(obj, false);
          if (obj.subMenu) return renderSubMenuItem(obj);
          return null;
        })}
      </MenuList>
    </aside>
  );
};

export default Sidebar;
