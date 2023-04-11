import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/configs/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { ProvidersDeocorator } from '../../src/shared/configs/storybook/ProvidersDeocorator/ProvidersDeocorator';

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
                { name: Theme.DARK, class: 'dark', color: '#00aced' },
                { name: Theme.LIGHT, class: 'light', color: '#3b5998' },
            ],
        },
    },
    decorators: [StyleDecorator, ProvidersDeocorator],
};

export default preview;
