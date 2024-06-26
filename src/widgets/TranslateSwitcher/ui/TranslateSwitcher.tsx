import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './TranslateSwitcher.module.scss';

interface TranslateSwitcherProps {
  className?: string;
}

export const TranslateSwitcher: FC<TranslateSwitcherProps> = memo(
  ({ className }) => {
    const { t, i18n } = useTranslation();

    const onTranslate = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
      <Button
        theme={ButtonTheme.UNSTYLED}
        onClick={onTranslate}
        className={classNames(cls.translateSwitcher, {}, [className])}
      >
        {t('Язык')}
      </Button>
    );
  },
);
