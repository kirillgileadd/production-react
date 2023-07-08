import { Theme, useTheme } from 'app/providers/ThemeProvider';

export const useGetCSSVars = (type: string, arg?: string): string => {
    const { theme } = useTheme();
    if (typeof window === 'undefined') return 'inherit';

    const root = window.document.querySelector(':root');
    const dark = window.document.querySelector('.dark');

    const currentTheme = theme === Theme.DARK ? dark : root;
    console.log({ currentTheme });
    return currentTheme
        ? getComputedStyle(currentTheme).getPropertyValue(`--${arg}-${type}`) ?? 'inherit'
        : 'inherit';
};
