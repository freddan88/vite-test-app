import { FC } from 'react';

interface IProps {
  label: string;
}

const MenuListItemText: FC<IProps> = ({ label }) => {
  return (
    <span className="flex-1 overflow-hidden whitespace-nowrap text-left">
      {label}
    </span>
  );
};

export default MenuListItemText;
