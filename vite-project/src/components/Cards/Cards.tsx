import { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import './cards.scss';
import { ICard } from '../../models';
import { getCards } from '../../utils/api';
import { Preloader } from '../Preloader/Preloader';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
const mainClass = 'cards';

export const Cards: () => JSX.Element = () => {
  const search = useSelector((state: RootState) => state.search);
  const [cards, setCards] = useState<ICard[]>([]);
  const [error, setError] = useState<null | Error>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    getCards({ setCards, setError, setLoaded, search: search.value });
  }, [search.value]);

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
