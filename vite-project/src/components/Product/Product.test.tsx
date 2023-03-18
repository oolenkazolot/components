import { render, screen } from '@testing-library/react';
import { Product } from '../Product/Product';
import { productsData } from '../../utils/products-data';
const product = productsData.products[0];

describe('Product', () => {
  it('render Product Component', () => {
    render(<Product {...product} />);
    expect(screen.getByText(product.brand)).toBeInTheDocument();
    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(`Category: ${product.category}`)).toBeInTheDocument();
    expect(screen.getByText(`Discount: ${product.discount}%`)).toBeInTheDocument();
    expect(screen.getByText(`Rating: ${product.rating}`)).toBeInTheDocument();
    expect(screen.getByText(`Stock: ${product.stock}`)).toBeInTheDocument();
    expect(screen.getByText(product.price + ' €')).toBeInTheDocument();
    const img = screen.getByAltText(/product-img/i);
    expect(img).toHaveAttribute('src', product.thumbnail);
  });
});
