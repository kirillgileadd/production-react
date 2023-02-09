import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes} from "./ThemeContext";

interface useThemeResult {
    theme: Themes,
    toggleTheme: () => void
}

export const useTheme = (): useThemeResult => {
    const {setTheme, theme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme, toggleTheme,
    }
}