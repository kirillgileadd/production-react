import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Butoon', () => {
  test('test in the document', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('add theme class', () => {
    render(<Button theme="secondary">TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('secondary');
    screen.debug();
  });
});
