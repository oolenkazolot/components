import '../../main.scss';
import './product.scss';
import { IProduct } from '../../models';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { CartDetails } from '../CartDetails/CartDetails';

export const Product: (props: IProduct) => JSX.Element = ({
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
}: IProduct) => {
  const mainClass = 'product';

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={mainClass}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div className={`${mainClass}__display`}>
          <img className={`${mainClass}__img`} src={image} alt="product-img" />
        </div>
        <div className={`${mainClass}__title`}>{name}</div>
      </div>
      {
        <Modal
          classNameIcon="icon-clear"
          onCloseModal={() => {
            setIsOpen(false);
          }}
          isOpen={isOpen}
        >
          <CartDetails
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            location={location}
            image={image}
          />
        </Modal>
      }
    </>
  );
};
