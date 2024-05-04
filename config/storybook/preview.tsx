import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/configs/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { ProvidersDeocorator } from '../../src/shared/configs/storybook/ProvidersDeocorator/ProvidersDeocorator';
import 'loki/configure-react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: Theme.DARK,
      list: [
        { name: Theme.DARK, class: 'app_dark_theme', color: '#00aced' },
        { name: Theme.LIGHT, class: 'app_light_theme', color: '#3b5998' },
      ],
    },
  },
  decorators: [StyleDecorator, ProvidersDeocorator],
};

export default preview;
