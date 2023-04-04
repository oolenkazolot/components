import '../../main.scss';
import './product.scss';
import { IProduct } from '../../models';

export const Product: (props: IProduct) => JSX.Element = ({
  name,
  status,
  species,
  gender,
  image,
}: IProduct) => {
  const mainClass = 'product';
  return (
    <div className={mainClass}>
      <div className={`${mainClass}__name`}>
        <div className={`${mainClass}__brand`}>{name}</div>
        <div className={`${mainClass}__model`}>{gender}</div>
      </div>
      <div className={`${mainClass}__display`}>
        <img className={`${mainClass}__img`} src={image} alt="product-img" />
      </div>
      <div className={`${mainClass}__info`}>
        <div className={`${mainClass}__category`}>{status}</div>
        <div className={`${mainClass}__discount`}>{species}</div>
        {/* {rating && <div className={`${mainClass}__rating`}>Rating: {rating}</div>}
        <div className={`${mainClass}__stock`}>Stock: {stock}</div> */}
      </div>
      <div className={`${mainClass}__btn-wrap`}>
        {/* <h3 className={`${mainClass}__price`}>{price} €</h3> */}
        <button className={`${mainClass}__btn-details`}>Details</button>
        <button className={`${mainClass}__btn-cart`}>
          <i className={`${mainClass}__icon icon-shopping-cart`}></i>
        </button>
      </div>
    </div>
  );
};
