import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';
import {
  editableProfileActions,
  EditableProfileCard,
} from 'features/EditableProfileCard';
import cls from './ProfileInfo.module.scss';

interface ProfileInfoProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const ProfileInfo: FC<ProfileInfoProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  useDynamicModuleLoader({ reducers, removeAfterUnmount: true });

  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const profileData = useSelector(getProfileData);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  useEffect(() => {
    if (!profileData) return;
    dispatch(editableProfileActions.updateProfile(profileData));
  }, [dispatch, profileData]);

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileInfo, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileInfo, {}, [className, cls.error])}>
        <Text
          text={t('Произошла ошибка при загрузке')}
          theme={TextTheme.ERROR}
        />
      </div>
    );
  }

  if (!profileData) {
    return <div></div>;
  }

  return (
    <div className={classNames(cls.profileInfo, {}, [className])}>
      <EditableProfileCard />
    </div>
  );
};
