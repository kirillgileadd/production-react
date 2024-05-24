import React, { ReactElement } from 'react';
import { RouterPath } from 'shared/configs/routerConfig/routerConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import InfoIcon from 'shared/assets/icons/info-circle.svg';
import { IconUserCircle } from '@tabler/icons-react';

export interface SidebarItemT {
  path: string;
  text: string;
  Icon: React.ComponentType<any>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemT[] = [
  {
    path: RouterPath.main,
    Icon: HomeIcon,
    text: 'Главная',
  },

  {
    path: RouterPath.about,
    Icon: InfoIcon,
    text: 'О нас',
  },
  {
    path: RouterPath.profile,
    Icon: IconUserCircle,
    text: 'Профиль',
    authOnly: true,
  },
];
