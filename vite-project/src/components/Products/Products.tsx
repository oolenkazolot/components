import { useState, useEffect } from 'react';
import { Product } from '../Product/Product';
import './products.scss';
import { IProduct } from '../../models';
import { getProducts } from '../../utils/api';
const mainClass = 'products';

interface IProducts {
  search: string;
}

export const Products: (props: IProducts) => JSX.Element = ({ search }: IProducts) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<null | Error>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    getProducts({ setProducts, setError, setLoaded, search });
  }, [search]);

  return (
    <>
      {error && <p>{error.message}</p>}
      {!loaded && <p>Loading</p>}
      {!error && loaded && (
        <section className={mainClass}>
          <h2 className={`${mainClass}__title`}>Characters</h2>
          <div className={`${mainClass}__list`}>
            {products.map((product: IProduct) => {
              return <Product key={product.id} {...product} />;
            })}
          </div>
        </section>
      )}
    </>
  );
};
