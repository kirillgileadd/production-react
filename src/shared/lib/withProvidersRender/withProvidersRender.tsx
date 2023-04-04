import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { I18nextProvider } from 'react-i18next';
import i18nTest from 'shared/configs/i18n/i18nforTest';

export const withProvidersRender = (component: ReactElement, options?: RenderOptions) => render(
    <I18nextProvider
        i18n={i18nTest}
    >
        <ThemeProvider>{component}</ThemeProvider>
    </I18nextProvider>,
    { ...options },
);
