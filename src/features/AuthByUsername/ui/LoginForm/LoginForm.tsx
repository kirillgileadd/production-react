import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <p>{t('Войти')}</p>
      <Input className={cls.loginForm__input} fullWidth type="text" autoFocus />
      <Input className={cls.loginForm__input} fullWidth type="text" />
      <Button className={cls.loginForm__btn}>{t('Войти')}</Button>
    </div>
  );
};
