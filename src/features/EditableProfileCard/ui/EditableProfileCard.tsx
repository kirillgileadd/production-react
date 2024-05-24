import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReducersList,
  useDynamicModuleLoader,
} from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { getProfileData, ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getEditableProfileIsLoading } from 'features/EditableProfileCard/model/selectors/getEditableProfileIsLoading/getEditableProfileIsLoading';
import { getEditableProfileError } from 'features/EditableProfileCard/model/selectors/getEditableProfileError/getEditableProfileError';
import { CurrencyT } from 'entities/Currency';
import { CountryT } from 'entities/Country';
import cls from './EditableProfileCard.module.scss';
import {
  editableProfileActions,
  editableProfileReducer,
} from '../model/slice/editableProfileSlice';
import { updateProfileData } from '../model/services/updateProfileData/updateProfileData';
import { getEditableProfileReadonly } from '../model/selectors/getEditableProfileReadonly/getEditableProfileReadonly';
import { getEditableProfileForm } from '../model/selectors/getEditableProfileForm/getEditableProfileForm';

const initialReducers: ReducersList = {
  editableProfile: editableProfileReducer,
};

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({
  className,
}) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const currentProfile = useSelector(getProfileData);
  const readonly = useSelector(getEditableProfileReadonly);
  const formData = useSelector(getEditableProfileForm);
  const isLoading = useSelector(getEditableProfileIsLoading);
  const error = useSelector(getEditableProfileError);
  useDynamicModuleLoader({ reducers: initialReducers });

  const onEdit = useCallback(() => {
    dispatch(editableProfileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(editableProfileActions.cancelEdit(currentProfile));
  }, [currentProfile, dispatch]);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(editableProfileActions.updateProfile({ first: value || '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(
        editableProfileActions.updateProfile({ age: Number(value || 0) }),
      );
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(editableProfileActions.updateProfile({ city: value || '' }));
    },
    [dispatch],
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(editableProfileActions.updateProfile({ last: value || '' }));
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(editableProfileActions.updateProfile({ username: value || '' }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(editableProfileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (value?: CurrencyT) => {
      dispatch(editableProfileActions.updateProfile({ currency: value }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (value?: CountryT) => {
      dispatch(editableProfileActions.updateProfile({ country: value }));
    },
    [dispatch],
  );

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.editableProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        {readonly ? (
          <Button onClick={onEdit}>{t('Редактировать')}</Button>
        ) : (
          <div className={cls.editBtn}>
            <Button
              isLoading={isLoading}
              theme={ButtonTheme.RED}
              onClick={onCancelEdit}
            >
              {t('Отмена')}
            </Button>
            <Button isLoading={isLoading} onClick={onSave}>
              {t('Сохранить')}
            </Button>
          </div>
        )}
      </div>
      <ProfileCard
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
        data={formData}
        readonly={readonly}
      />
    </div>
  );
};
