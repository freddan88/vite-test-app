import Icon from '@mdi/react';
import React, { MouseEvent, ReactNode, useMemo } from 'react';

interface IProps {
  children: ReactNode | string;
  disabled?: boolean;
  name?: string;
  value?: string;
  fullWidth?: boolean;
  tooltipText?: string;
  iconPathAfter?: string;
  iconPathBefore?: string;
  type?: 'button' | 'reset' | 'submit';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
}

const buttonStyleClasses = {
  sizes: {
    small: 'px-4 py-1 rounded-md',
    medium: 'px-6 py-2 rounded-lg',
    large: 'px-8 py-3 rounded-lg',
  },
  colors: {
    primary: 'bg-blue-500 border-blue-500',
    secondary: 'bg-slate-300 border-green-500',
    outlined: 'bg-slate-50 border-current',
  },
  text: {
    contained: {
      primary: 'text-slate-50',
      secondary: 'text-slate-800',
    },
    outlined: {
      primary: 'text-blue-500',
      secondary: 'text-slate-800',
    },
  },
  variants: {
    contained: 'border-0',
    outlined: 'border-2',
  },
};

const Button: React.FC<IProps> = ({
  children,
  disabled,
  name,
  value,
  fullWidth,
  tooltipText,
  iconPathAfter,
  iconPathBefore,
  type = 'button',
  size = 'medium',
  color = 'primary',
  variant = 'contained',
  onClick,
}) => {
  const colorVariant = variant === 'outlined' ? 'outlined' : color;

  const combinedStyleClasses = useMemo(
    () => [
      buttonStyleClasses.sizes[size],
      buttonStyleClasses.colors[colorVariant],
      buttonStyleClasses.text[variant][color],
      buttonStyleClasses.variants[variant],
    ],
    []
  );

  return (
    <div
      className="inline-block"
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      <button
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        style={{ width: fullWidth ? '100%' : 'auto' }}
        className={`flex items-center justify-center gap-2 hover:brightness-90 ${combinedStyleClasses.join(
          ' '
        )}`}
        onClick={!onClick ? undefined : (e) => onClick(e)}
      >
        {iconPathBefore && <Icon path={iconPathBefore} size={0.8} />}
        {children}
        {iconPathAfter && <Icon path={iconPathAfter} size={0.8} />}
      </button>
    </div>
  );
};

export default Button;
