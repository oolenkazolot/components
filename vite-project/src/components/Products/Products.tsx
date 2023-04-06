import { useState, useEffect } from 'react';
import { Product } from '../Product/Product';
import './products.scss';
import { IProduct } from '../../models';
import { getProducts } from '../../utils/api';
import { Preloader } from '../Preloader/Preloader';
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
      {error && <p className={`${mainClass}__error`}>{error.message}</p>}
      {!loaded && <Preloader />}
      {!error && loaded && (
        <section className={mainClass}>
          <h2 className={`${mainClass}__title`}>
            <span className={`${mainClass}__content`}>Characters Rick i Morty</span>
          </h2>
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
