import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Butoon', () => {
  test('test in the document', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('add theme class', () => {
    // eslint-disable-next-line no-undef
    render(<Button theme={ButtonTheme.SECONDARY}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('secondary');
    screen.debug();
  });
});
