import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  isActive?: boolean;
}

const MenuListItem: FC<IProps> = ({ children, isActive }) => {
  const classes = `relative ${isActive ? 'bg-slate-600' : ''}`.trim();

  return <li className={classes}>{children}</li>;
};

export default MenuListItem;
