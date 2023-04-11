import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div className={cls.logo}>Gilead Production React</div>
            <div className={cls.links}>
                <AppLink to="/" theme="light">{t('Главная')}</AppLink>
                <AppLink to="/about" theme="light">
                    {t('О нас')}
                </AppLink>
                <AppLink to="/about" theme="light">
                    {t('Новости')}
                </AppLink>
            </div>
        </div>
    );
};
