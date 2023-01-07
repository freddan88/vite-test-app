import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  isActive?: boolean;
  isSubMenu?: boolean;
  isClosed?: boolean;
  height?: string | number;
  onClick?: () => void;
}

const MenuList: FC<IProps> = ({
  children,
  isActive,
  isSubMenu,
  isClosed,
  onClick,
  height = 'auto',
}) => {
  const bgClass = isActive ? 'bg-slate-600' : 'bg-slate-800';

  const subMenuClass = isSubMenu ? 'overflow-hidden' : '';

  const subMenuClasses =
    isSubMenu && isClosed ? 'absolute top-0 right-[-200px] z-50 w-[200px]' : '';

  const classes = `${bgClass} ${subMenuClass} ${subMenuClasses}`.trim();

  return (
    <ul style={{ height }} className={classes} onClick={onClick}>
      {children}
    </ul>
  );
};

export default MenuList;
