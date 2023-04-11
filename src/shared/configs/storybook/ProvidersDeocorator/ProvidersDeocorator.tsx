import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

export const ProvidersDeocorator = (StoryComponent: Story) => (
    <BrowserRouter>
        <ThemeProvider>
            <StoryComponent />
        </ThemeProvider>
    </BrowserRouter>
);
