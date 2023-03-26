import { render, screen } from '@testing-library/react';
import { Products } from './Products';
import { productsData } from '../../utils/products-data';

describe('Products', () => {
  it('renders Products component', () => {
    render(<Products />);
    productsData.products.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });
});
