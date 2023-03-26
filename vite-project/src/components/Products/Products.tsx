import { Component } from 'react';
import './products.scss';
import { Product } from '../Product/Product';
import { productsData } from '../../utils/products-data';

export class Products extends Component {
  mainClass: string;
  constructor(props: Component) {
    super(props);
    this.mainClass = 'products';
  }

  render() {
    return (
      <section className={this.mainClass}>
        <h2 className={`${this.mainClass}__title`}>Products</h2>
        <div className={`${this.mainClass}__list`}>
          {productsData.products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </section>
    );
  }
}
