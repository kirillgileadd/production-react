import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { TranslateSwitcher } from 'widgets/TranslateSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink';
import { AppRouter, RouterPath } from 'shared/configs/routerConfig/routerConfig';

import HomeIcon from 'shared/assets/icons/home.svg';
import InfoIcon from 'shared/assets/icons/info-circle.svg';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside data-testid="sidebar" className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                className={cls.collapseButton}
                data-testid="sidebar-toggle"
                onClick={handleCollapse}
            >
                {t('Тогл')}
            </Button>
            <div className={cls.sideBar__list}>
                <AppLink to={RouterPath.main} className={cls.sideBar__item}>
                    <HomeIcon />
                    <span className={cls.sideBar__link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink to={RouterPath.about} className={cls.sideBar__item}>
                    <InfoIcon />
                    <span className={cls.sideBar__link}>
                        {t('О нас')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.bottomItems}>
                <TranslateSwitcher />
                <ThemeSwitcher />
            </div>
        </aside>
    );
};
