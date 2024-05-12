import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { I18nextProvider } from 'react-i18next';
import i18nTest from 'shared/configs/i18n/i18nforTest';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface providerRenderOptions extends RenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const withProvidersRender = (
  component: ReactElement,
  options?: providerRenderOptions,
) => {
  return render(
    <MemoryRouter initialEntries={[options?.route ?? '/']}>
      <StoreProvider initialState={options?.initialState}>
        <I18nextProvider i18n={i18nTest}>
          <ThemeProvider>{component}</ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
    { ...options },
  );
};
