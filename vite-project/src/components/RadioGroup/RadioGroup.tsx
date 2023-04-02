import './RadioGroup.scss';
import { IRadioGroup } from '../../models';
import { Message } from '../Message/Message';
const mainClass = 'radio-group';

export const RadioGroup: (props: IRadioGroup) => JSX.Element = ({
  content,
  values,
  register,
  attributes,
  error,
}) => {
  return (
    <div className={mainClass}>
      {values.map((value, index) => {
        return (
          <label key={index} className={`${mainClass}__btn`}>
            <input
              type="radio"
              className={`${mainClass}__input`}
              {...register}
              value={value}
              {...attributes}
            />
            {content[index]}
          </label>
        );
      })}
      {error && <Message message={error.message || 'Error'} error={!!error.message} />}
    </div>
  );
};
