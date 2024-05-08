import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { profileReducer } from '../../../entities/Profile';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();
  useDynamicModuleLoader({ reducers, removeAfterUnmount: true });

  return <div className={classNames('', {}, [className])}>{t('Профиль')}</div>;
};

export default ProfilePage;
