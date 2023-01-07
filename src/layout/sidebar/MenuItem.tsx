import Icon from '@mdi/react';
import React, { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {
  iconPath: string;
  itemLabel: string;
  pageLink?: string;
  setActiveSubMenu?: Dispatch<SetStateAction<string>>;
}

const MenuItem: React.FC<IProps> = ({
  iconPath,
  itemLabel,
  pageLink,
  setActiveSubMenu,
}) => {
  return (
    <>
      {pageLink ? (
        <NavLink
          to={pageLink}
          className="flex w-full py-2"
          onClick={() => setActiveSubMenu && setActiveSubMenu('')}
        >
          <Icon path={iconPath} size={1} className="mx-2" />
          <span className="flex-1 overflow-hidden whitespace-nowrap text-left">
            {itemLabel}
          </span>
        </NavLink>
      ) : (
        <button
          className="flex w-full py-2"
          onClick={() =>
            setActiveSubMenu &&
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
      )}
    </>
  );
};

export default MenuItem;
