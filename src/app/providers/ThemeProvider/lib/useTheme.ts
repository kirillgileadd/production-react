import { useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, useThemeContext } from './ThemeContext';

interface useThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): useThemeResult => {
    const { setTheme, theme } = useThemeContext();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme, toggleTheme,
    };
};
