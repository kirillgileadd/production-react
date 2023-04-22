import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { I18nextProvider } from 'react-i18next';
import i18nTest from 'shared/configs/i18n/i18nforTest';
import { MemoryRouter } from 'react-router-dom';

export interface providerRenderOptions extends RenderOptions {
    route?: string
}

export const withProvidersRender = (component: ReactElement, options?: providerRenderOptions) => {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider
                i18n={i18nTest}
            >
                <ThemeProvider>{component}</ThemeProvider>
            </I18nextProvider>
        </MemoryRouter>,
        { ...options },
    );
};
