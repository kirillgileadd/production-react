import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { SidebarItemT } from 'widgets/SideBar/model/items';
import { useSelector } from 'react-redux';
import { getUserAtuhData } from 'entities/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  className?: string;
  item: SidebarItemT;
  collapsed?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(
  ({ className, item, collapsed }) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAtuhData);

    const mods = {
      [cls.collapsed]: collapsed,
    };

    if (item.authOnly && !isAuth) return null;

    return (
      <AppLink
        to={item.path}
        className={classNames(cls.sidebarItem, mods, [className])}
      >
        <item.Icon />
        <span className={cls.sidebarItem__link}>{t(item.text)}</span>
      </AppLink>
    );
  },
);
