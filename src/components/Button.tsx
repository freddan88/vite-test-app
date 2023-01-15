import Icon from '@mdi/react';
import { MouseEvent, ReactNode, useMemo } from 'react';

export interface IProps {
  children: ReactNode | string;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
  fullWidth?: boolean;
  tooltipTextEnable?: string;
  tooltipTextDisabled?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  iconPathAfter?: string;
  iconPathBefore?: string;
  type?: 'button' | 'reset' | 'submit';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
}

export const BUTTON_CONTAINER_TEST_ID = 'button-container-test-id';

export const buttonStyleClasses = {
  sizes: {
    small: 'px-2 py-1 rounded-md',
    medium: 'px-4 py-2 rounded-lg',
    large: 'px-6 py-2 rounded-lg',
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
    contained: 'border-2',
    outlined: 'border-2',
  },
};

const Button = ({
  children, // Mandatory: Text or element to show in this button
  disabled, // Optional: Prop to disable this button
  id, // Optional: Prop to set id for this button
  name, // Optional: Prop to set name for this button
  value, // Optional: Prop to set value for this button
  fullWidth, // Optional: If true this buttons width will be 100%
  tooltipPosition = 'top', // Optional: Were to render the tooltip. Default: Top of this button
  tooltipTextDisabled, // Optional: Enables the tooltip and displays a text onHover when this button is disabled
  tooltipTextEnable, // Optional: Enables the tooltip and displays a text onHover when this button is enabled
  iconPathAfter, // Optional: If set it will render an icon after the text in this button
  iconPathBefore, // Optional: If set it will render an icon before the text in this button
  type = 'button', // Optional: Set the type for this button. Default: Button
  size = 'medium', // Optional: Set the size of this button. Default: Medium
  color = 'primary', // Optional: Set the color-scheme for this button. Default: Primary
  variant = 'contained', // Optional: Set the look for this button. Default: Contained
  onClick, // Optional: Function to trigger when clicked. Emits the event together with name and value if set
}: IProps) => {
  const colorVariant = variant === 'outlined' ? 'outlined' : color;

  const styleClasses = useMemo(
    () => [
      buttonStyleClasses.sizes[size],
      buttonStyleClasses.colors[colorVariant],
      buttonStyleClasses.text[variant][color],
      buttonStyleClasses.variants[variant],
    ],
    [size, color, variant, colorVariant]
  );

  const allClasses = `box-border flex items-center justify-center gap-2 hover:brightness-90 ${styleClasses.join(
    ' '
  )}`;

  return (
    <div
      className="inline-block"
      data-testid={BUTTON_CONTAINER_TEST_ID}
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      <button
        id={id}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        style={{ width: fullWidth ? '100%' : 'auto' }}
        onClick={!onClick ? undefined : (e) => onClick(e)}
        className={allClasses}
      >
        {iconPathBefore && <Icon path={iconPathBefore} size={0.8} />}
        {children}
        {iconPathAfter && <Icon path={iconPathAfter} size={0.8} />}
      </button>
    </div>
  );
};

export default Button;
