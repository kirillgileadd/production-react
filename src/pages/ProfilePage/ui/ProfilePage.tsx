import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileInfo } from 'widgets/ProfileInfo/ui/ProfileInfo/ProfileInfo';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.profilePage, {}, [className])}>
      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;
