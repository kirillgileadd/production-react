import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import {AppLink} from "shared/ui/AppLink";
import {useTranslation} from "react-i18next";

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = ({}) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <div className={cls.logo}>Gilead Production React</div>
            <div className={cls.links}>
                <AppLink to='/' theme='secondary'>{t('Главная')}</AppLink>
                <AppLink to='/about' theme='secondary'> {t('О нас')}</AppLink>
            </div>
        </div>
    );
}



