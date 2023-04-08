import { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import './cards.scss';
import { ICard, ICards } from '../../models';
import { getCards } from '../../utils/api';
import { Preloader } from '../Preloader/Preloader';
const mainClass = 'cards';

export const Cards: (props: ICards) => JSX.Element = ({ search }: ICards) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [error, setError] = useState<null | Error>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    getCards({ setCards, setError, setLoaded, search });
  }, [search]);

  return (
    <>
      {error && <p className={`${mainClass}__error`}>{error.message}</p>}
      {!loaded && <Preloader />}
      {!error && loaded && (
        <section className={mainClass}>
          <h2 className={`${mainClass}__title`}>
            <span className={`${mainClass}__content`}>Characters Rick and Morty</span>
          </h2>
          <div className={`${mainClass}__list`}>
            {cards.map((card: ICard) => {
              return <Card key={card.id} {...card} />;
            })}
          </div>
        </section>
      )}
    </>
  );
};
