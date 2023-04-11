import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonTheme = 'primary' | 'secondary' | 'unstyled' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
    className, children, theme = 'primary', ...props
}) => (
    <button type="button" className={classNames(cls.button, {}, [className, cls[theme]])} {...props}>
        {children}
    </button>
);
