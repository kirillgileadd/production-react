import {createContext, Dispatch, SetStateAction} from "react";

export enum Themes {
    LIGHT= 'light',
    DARK= 'dark',
}

export interface ThemeContextState {
    theme?: Themes;
    setTheme?: Dispatch<SetStateAction<Themes>>
}

export const ThemeContext = createContext<ThemeContextState>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
