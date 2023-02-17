import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (
    {
        children,
        to,
        theme = 'primary',
        className,
        ...props
    },
) => (
    <Link to={to} {...props} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
        {children}
    </Link>
);
