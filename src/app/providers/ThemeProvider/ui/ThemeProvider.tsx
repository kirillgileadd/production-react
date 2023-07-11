import React, { FC, ReactNode, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
  ThemeContextState,
} from '../lib/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultThemeValue: ThemeContextState = useMemo(
    () => ({
      setTheme,
      theme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultThemeValue}>
      {children}
    </ThemeContext.Provider>
  );
};
