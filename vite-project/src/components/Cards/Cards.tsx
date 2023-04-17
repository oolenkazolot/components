import { Card } from '../Card/Card';
import './cards.scss';
import { ICard } from '../../models';
import { Preloader } from '../Preloader/Preloader';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetCardsQuery } from '../../redux/services/card';
const mainClass = 'cards';

export const Cards: () => JSX.Element = () => {
  const stateSearch = useSelector((state: RootState) => state.reducer.search);

  const { data, error, isLoading, isFetching } = useGetCardsQuery(stateSearch.search);

  if (isLoading || isFetching) {
    return <Preloader />;
  }

  if (error || !data?.results) {
    return <p className={`${mainClass}__error`}>{'Error, data not received'}</p>;
  }

  return (
    <>
      <section className={mainClass}>
        <h2 className={`${mainClass}__title`}>
          <span className={`${mainClass}__content`}>Characters Rick and Morty</span>
        </h2>
        <div className={`${mainClass}__list`}>
          {data &&
            data.results &&
            data.results.map((card: ICard) => {
              return <Card key={card.id} {...card} />;
            })}
        </div>
      </section>
    </>
  );
};
