import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './TranslateSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface TranslateSwitcherProps {
    className?: string;
}

export const TranslateSwitcher: FC<TranslateSwitcherProps> = ({className}) => {
    const {t, i18n} = useTranslation();

    const onTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button theme='unstyled' onClick={onTranslate} className={classNames(cls.translateSwitcher, {}, [className])}>
            {t('Язык')}
        </Button>
    );
};

