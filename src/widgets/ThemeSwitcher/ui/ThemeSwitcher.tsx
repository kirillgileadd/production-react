import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import MoonIcon from 'shared/assets/icons/moon-icon.svg';
import SunIcon from 'shared/assets/icons/sun-icon.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme="unstyled" className={classNames(cls.themeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
};
