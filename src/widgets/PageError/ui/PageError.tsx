import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const reloadPage = () => {
    navigate(0);
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('Что-то пошло не так')}</p>
      <Button onClick={reloadPage}>{t('Вернуться на главную')}</Button>
    </div>
  );
};
