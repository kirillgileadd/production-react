import React, {FC, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './SideBar.module.scss'
import {Button} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {TranslateSwitcher} from "widgets/TranslateSwitcher";

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const handleCollapse = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <aside className={classNames(cls.sideBar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={handleCollapse}>Toggle</Button>
            <div className={cls.bottomItems}>
                <TranslateSwitcher/>
                <ThemeSwitcher/>
            </div>
        </aside>
    );
};

