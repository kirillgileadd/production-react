import { SideBar } from 'widgets/SideBar';
import { fireEvent, screen } from '@testing-library/react';
import { withProvidersRender } from 'shared/lib/withProvidersRender/withProvidersRender';

describe('SideBar', () => {
    test('in the dom', () => {
        withProvidersRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('add collapse class', () => {
        withProvidersRender(<SideBar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
