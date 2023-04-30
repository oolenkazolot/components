import './CardForm.scss';
import { ICardForm } from '../../models';

const mainClass = 'card-form';

export const CardForm: (props: ICardForm) => JSX.Element = ({
  inputText,
  inputDate,
  select,
  inputCheckbox,
  radioGroup,
  image,
}: ICardForm) => {
  return (
    <div className={mainClass}>
      <div className={`${mainClass}__name`}>{inputText}</div>
      <div className={`${mainClass}__picture`}>
        {image && <img className={`${mainClass}__picture-item`} src={image} alt="card-img"></img>}
      </div>

      <div className={`${mainClass}__info`}>
        <div className={`${mainClass}__info-item`}>Birthday: {inputDate}</div>
        <div className={`${mainClass}__info-item`}>Country: {select}</div>
        {radioGroup === 'add-notifications' && (
          <div className={`${mainClass}__info-item`}>
            I want to receive notifications about promo, sales, etc.
          </div>
        )}
        {radioGroup === 'not-notifications' && (
          <div className={`${mainClass}__info-item`}>
            I don’t want to receive notifications about promo, sales, etc.
          </div>
        )}
        {inputCheckbox && (
          <div className={`${mainClass}__info-item`}>I agree with my personal data</div>
        )}
      </div>
    </div>
  );
};
