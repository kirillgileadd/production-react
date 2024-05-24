import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { ProfileT } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect, CurrencyT } from 'entities/Currency';
import { CountryT } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: DeepPartial<ProfileT>;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value?: CurrencyT) => void;
  onChangeCountry?: (value?: CountryT) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  readonly,
  onChangeLastName,
  onChangeFirstName,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUsername,
  onChangeCountry,
  onChangeCurrency,
}) => {
  const { t } = useTranslation('profile');

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.data}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {data?.avatar && <Avatar src={data?.avatar} alt="avatar" size={200} />}
        <Input
          onChange={onChangeFirstName}
          value={data?.first ?? ''}
          label={t('Ваше имя')}
          fullWidth
          readonly={readonly}
        />
        <Input
          onChange={onChangeLastName}
          value={data?.last ?? ''}
          label={t('Ваша фамилия')}
          fullWidth
          readonly={readonly}
        />
        <Input
          type="number"
          onChange={onChangeAge}
          value={data?.age ?? ''}
          label={t('Ваш возраст')}
          fullWidth
          readonly={readonly}
        />
        <Input
          onChange={onChangeCity}
          value={data?.city ?? ''}
          label={t('Ваш город')}
          fullWidth
          readonly={readonly}
        />
        <Input
          onChange={onChangeUsername}
          value={data?.username ?? ''}
          label={t('Имя пользователя')}
          fullWidth
          readonly={readonly}
        />
        <Input
          onChange={onChangeAvatar}
          value={data?.avatar ?? ''}
          label={t('Введите ссылку на аватар')}
          fullWidth
          readonly={readonly}
        />
        <CurrencySelect
          onChange={onChangeCurrency}
          value={data?.currency ?? undefined}
          fullWidth
          readonly={readonly}
        />
        <CountrySelect
          onChange={onChangeCountry}
          value={data?.country ?? undefined}
          fullWidth
          readonly={readonly}
        />
      </div>
    </div>
  );
};
