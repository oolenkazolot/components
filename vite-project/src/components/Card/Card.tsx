import '../../main.scss';
import './Card.scss';
import { ICard } from '../../models';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { CardDetails } from '../CardDetails/CardDetails';

export const Card: (props: ICard) => JSX.Element = ({ name, image, id }: ICard) => {
  const mainClass = 'card';

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
      {isOpen && (
        <Modal
          classNameIcon="icon-clear"
          onCloseModal={() => {
            setIsOpen(false);
          }}
          isOpen={isOpen}
        >
          <CardDetails id={id} />
        </Modal>
      )}
    </>
  );
};
