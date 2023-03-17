import { render, screen } from '@testing-library/react';
import { Product } from '../Product/Product';

describe('Product', () => {
  it('render Product Component', () => {
    render(<Product />);
    expect(screen.getByAltText(/product-img/i)).toBeInTheDocument();
  });
});
