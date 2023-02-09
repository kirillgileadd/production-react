import React, {FC, ReactNode, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeContextState, Themes} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.DARK

interface ThemeProviderProps {
    children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Themes>(defaultTheme)

    const defaultThemeValue: ThemeContextState = useMemo(() => ({
        setTheme,
        theme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultThemeValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;