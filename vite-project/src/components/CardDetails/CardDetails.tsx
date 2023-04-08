import { useEffect, useState } from 'react';
import './CardDetails.scss';
import { ICard, ICardDetails } from '../../models';
import { getCard } from '../../utils/api';
import { Preloader } from '../Preloader/Preloader';

const mainClass = 'card-details';

export const CardDetails: (props: ICardDetails) => JSX.Element = ({ id }: ICardDetails) => {
  const [card, setCard] = useState<ICard | null>(null);
  const [error, setError] = useState<null | Error>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    getCard({ id, setCard, setError, setLoaded });
  }, [id]);
  return (
    <>
      {!loaded && <Preloader />}
      {error && <p className={`${mainClass}__error`}>{error.message}</p>}
      {card && (
        <section className={mainClass}>
          <h2 className={`${mainClass}__title`}>{card.name}</h2>
          <div className={`${mainClass}__display`}>
            <img className={`${mainClass}__img`} src={card.image} alt="product-img" />
          </div>
          <div className={`${mainClass}__info`}>
            <div className={`${mainClass}__item`}>
              <span className={`${mainClass}__subtitle`}>Status:</span> {card.status}
            </div>
            <div className={`${mainClass}__item`}>
              <span className={`${mainClass}__subtitle`}>Species:</span> {card.species}
            </div>
            <div className={`${mainClass}__item`}>
              <span className={`${mainClass}__subtitle`}>Origin: </span>
              {card.origin.name}
            </div>
            <div className={`${mainClass}__item`}>
              <span className={`${mainClass}__subtitle`}>Gender:</span> {card.gender}
            </div>
            <div className={`${mainClass}__item`}>
              <span className={`${mainClass}__subtitle`}>Location: </span>
              {card.location.name}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
