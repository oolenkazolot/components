import './CardDetails.scss';
import { ICardDetails } from '../../models';
import { Preloader } from '../Preloader/Preloader';
import { useGetCardQuery } from '../../redux/services/card';

const mainClass = 'card-details';

export const CardDetails: (props: ICardDetails) => JSX.Element = ({ id }: ICardDetails) => {
  const { data, error, isLoading } = useGetCardQuery(id);

  if (isLoading) {
    return <Preloader />;
  }

  if (error || !data) {
    return <p className={`${mainClass}__error`}>Error, data not received</p>;
  }

  return (
    <>
      {data && (
        <section className={mainClass}>
          <h2 className={`${mainClass}__title`}>{data.name}</h2>
          <div className={`${mainClass}__display`}>
            <img className={`${mainClass}__img`} src={data.image} alt="product-img" />
          </div>
          <div className={`${mainClass}__info`}>
            <div className={`${mainClass}__item`}>
              <span className={`${mainClass}__subtitle`}>Status:</span> {data.status}
            </div>
            <div className={`${mainClass}__item`}>
              <span className={`${mainClass}__subtitle`}>Species:</span> {data.species}
            </div>
            <div className={`${mainClass}__item`}>
              <span className={`${mainClass}__subtitle`}>Origin: </span>
              {data.origin.name}
            </div>
            <div className={`${mainClass}__item`}>
              <span className={`${mainClass}__subtitle`}>Gender:</span> {data.gender}
            </div>
            <div className={`${mainClass}__item`}>
              <span className={`${mainClass}__subtitle`}>Location: </span>
              {data.location.name}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
