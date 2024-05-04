import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

export const LoginForm: FC<LoginFormProps> = ({ className, onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const loginForm = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(
      loginByUsername({
        username: loginForm.username,
        password: loginForm.password,
      }),
    );
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, loginForm.password, loginForm.username, onSuccess]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text className={cls.loginForm__title} title={t('Войти')} />
      {loginForm.error && (
        <Text text={loginForm.error} theme={TextTheme.ERROR} />
      )}
      <Input
        className={cls.loginForm__input}
        label={t('Почта')}
        onChange={onChangeUsername}
        value={loginForm.username}
        fullWidth
        type="text"
        autoFocus
      />
      <Input
        className={cls.loginForm__input}
        label={t('Пароль')}
        fullWidth
        value={loginForm.password}
        onChange={onChangePassword}
        type="text"
      />
      <Button
        disabled={loginForm.isLoading}
        isLoading={loginForm.isLoading}
        className={cls.loginForm__btn}
        onClick={onLoginClick}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
