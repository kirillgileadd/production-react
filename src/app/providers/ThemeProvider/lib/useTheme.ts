import { LOCAL_STORAGE_THEME_KEY, Theme, useThemeContext } from './ThemeContext';

interface useThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): useThemeResult => {
    const { setTheme, theme } = useThemeContext();

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme, toggleTheme,
    };
};
