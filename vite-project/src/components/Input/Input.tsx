import './Input.scss';
import { IInput } from '../../models';
import { Message } from '../Message/Message';
const mainClass = 'input-block';

export const Input: (props: IInput) => JSX.Element = ({
  content,
  register,
  attributes,
  error,
}: IInput) => {
  const inputClass: string = error
    ? `${mainClass}__input ${mainClass}__input--error`
    : `${mainClass}__input`;
  return (
    <div className={mainClass}>
      <label className={`${mainClass}__label`}>
        {content}
        <input className={inputClass} {...register} {...attributes} />
      </label>
      {error && error.type === 'required' && (
        <Message message={error.message || 'Error'} error={!!error} />
      )}
      {error && error.type === 'names' && (
        <Message
          message={
            error.message ||
            'Enter the first and last name, with a capital letter (example: Alex Smit)'
          }
          error={!!error}
        />
      )}
      {error && error.type === 'date' && (
        <Message
          message={
            error.message ||
            'Enter the date in numbers, date must not be greater than today is date'
          }
          error={!!error}
        />
      )}
    </div>
  );
};
