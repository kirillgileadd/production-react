import {FC, ReactNode} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

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
    }) => {

    return (
        <Link to={to} {...props} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};

