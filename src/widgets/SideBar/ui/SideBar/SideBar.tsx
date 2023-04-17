import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { TranslateSwitcher } from 'widgets/TranslateSwitcher';
import { useTranslation } from 'react-i18next';
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
            <Button data-testid="sidebar-toggle" onClick={handleCollapse}>{t('Тогл')}</Button>
            <div className={cls.bottomItems}>
                <TranslateSwitcher />
                <ThemeSwitcher />
            </div>
        </aside>
    );
};
