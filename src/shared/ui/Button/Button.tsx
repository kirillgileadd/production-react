import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  UNSTYLED = 'unstyled',
  OUTLINE = 'outline',
  WHITE = 'white',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = memo(
  ({
    className,
    children,
    disabled,
    isLoading,
    square,
    size,
    type,
    theme = ButtonTheme.PRIMARY,
    ...props
  }) => {
    const mods = {
      [cls[theme]]: true,
      [cls.square]: square,
      [cls[size]]: true,
      [cls.disabled]: disabled,
      [cls.isLoading]: isLoading,
    };

    return (
      <button
        {...props}
        type="button"
        disabled={disabled || isLoading}
        className={classNames(cls.button, mods, [className, cls[theme]])}
      >
        {children}
      </button>
    );
  },
);
