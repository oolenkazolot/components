import './CardForm.scss';
import { ICardFormValues } from '../../models';

export const CardForm: (props: ICardFormValues) => JSX.Element = ({
  name,
  date,
  addNotifications,
  notNotifications,
  dataPersonal,
  country,
  picture,
}: ICardFormValues) => {
  const mainClass = 'card-form';
  return (
    <div className={mainClass}>
      <div className={`${mainClass}__name`}>{name}</div>
      <div className={`${mainClass}__picture`}>
        {picture && (
          <img className={`${mainClass}__picture-item`} src={picture} alt="card-img"></img>
        )}
      </div>

      <div className={`${mainClass}__info`}>
        <div className={`${mainClass}__info-item`}>Birthday: {date}</div>
        <div className={`${mainClass}__info-item`}>Country: {country}</div>
        {addNotifications && (
          <div className={`${mainClass}__info-item`}>
            I want to receive notifications about promo, sales, etc.
          </div>
        )}
        {notNotifications && (
          <div className={`${mainClass}__info-item`}>
            I don’t want to receive notifications about promo, sales, etc.
          </div>
        )}
        {dataPersonal && <div>I agree with my personal data</div>}
      </div>
    </div>
  );
};
