import React, { FC, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { TranslateSwitcher } from 'widgets/TranslateSwitcher';
import { useTranslation } from 'react-i18next';
import { SidebarItemsList } from 'widgets/SideBar/model/items';
import { SidebarItem } from 'widgets/SideBar/ui/SidebarItem/SidebarItem';
import { IconMenu2, IconX } from '@tabler/icons-react';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        className={cls.collapseButton}
        data-testid="sidebar-toggle"
        onClick={handleCollapse}
        square
      >
        {collapsed ? <IconMenu2 /> : <IconX />}
      </Button>
      <div className={cls.sideBar__list}>
        {SidebarItemsList.map((item) => (
          <SidebarItem collapsed={collapsed} item={item} key={item.path} />
        ))}
      </div>
      <div className={cls.bottomItems}>
        <TranslateSwitcher />
        <ThemeSwitcher />
      </div>
    </aside>
  );
});
