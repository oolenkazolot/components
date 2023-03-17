import { render, screen } from '@testing-library/react';
import { Products } from './Products';

describe('Products', () => {
  it('renders Products component', () => {
    render(<Products />);
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
  });
});
