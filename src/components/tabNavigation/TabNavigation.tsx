import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {}

const tabData = [
  {
    link: '/home',
    label: 'Home',
  },
  {
    link: '/links',
    label: 'Links',
  },
  {
    link: '/downloads',
    label: 'Downloads',
  },
  {
    link: '/tutorials',
    label: 'Tutorials',
  },
];

const TabNavigation: React.FC<IProps> = (props) => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <nav className="mt-8 rounded-md bg-slate-200">
      <ul className="mx-auto flex h-20 max-w-3xl justify-evenly">
        {tabData.map((obj) => {
          const isActiveLink = activeLink === obj.link;
          return (
            <li
              className={`relative flex flex-1 after:absolute after:inset-x-0 after:bottom-0 after:p-0.5 ${
                isActiveLink ? 'after:bg-green-300' : 'after:bg-transparent'
              }`}
            >
              <NavLink
                to={obj.link}
                className={({ isActive }: any) => {
                  if (isActive) setActiveLink(obj.link);
                  return isActive
                    ? 'flex flex-1 items-center justify-center font-bold text-slate-500'
                    : 'flex flex-1 items-center justify-center font-bold';
                }}
              >
                {obj.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TabNavigation;
