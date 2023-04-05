import './CartDetails.scss';
const mainClass = 'cart-details';

interface ICartDetails {
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
}

export const CartDetails: (props: ICartDetails) => JSX.Element = ({
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
}: ICartDetails) => {
  return (
    <div className={mainClass}>
      <div className={`${mainClass}__title`}>{name}</div>
      <div className={`${mainClass}__display`}>
        <img className={`${mainClass}__img`} src={image} alt="product-img" />
      </div>
      <div className={`${mainClass}__info`}>
        <div className={`${mainClass}__item`}>
          <span className={`${mainClass}__subtitle`}>Status:</span> {status}
        </div>
        <div className={`${mainClass}__item`}>
          <span className={`${mainClass}__subtitle`}>Species:</span> {species}
        </div>
        <div className={`${mainClass}__item`}>
          <span className={`${mainClass}__subtitle`}>Origin: </span>
          {origin.name}
        </div>
        <div className={`${mainClass}__item`}>
          <span className={`${mainClass}__subtitle`}>Gender:</span> {gender}
        </div>
        <div className={`${mainClass}__item`}>
          <span className={`${mainClass}__subtitle`}>Location: </span>
          {location.name}
        </div>
      </div>
    </div>
  );
};
