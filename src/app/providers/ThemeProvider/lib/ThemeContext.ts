import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextState {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextState | null>(null);

export const useThemeContext = () => {
  const data = useContext(ThemeContext);

  if (!data) {
    throw Error("U can't use context outside provider");
  }

  return data;
};

export const LOCAL_STORAGE_THEME_KEY = 'theme';
