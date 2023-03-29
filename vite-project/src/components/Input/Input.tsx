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
  return (
    <div className={mainClass}>
      <label className={`${mainClass}__label`}>
        {content}
        <input className={`${mainClass}__input`} {...register} {...attributes} />
      </label>
      {error && error.type === 'required' && (
        <Message message={error.message || 'Error'} error={!!error.message} />
      )}
      {error && error.type === 'names' && (
        <Message
          message={
            error.message ||
            'enter the first and last name, with a capital letter (example: Alex Smit)'
          }
          error={true}
        />
      )}
      {error && error.type === 'date' && (
        <Message
          message={
            error.message ||
            'enter the date in numbers, date must not be greater than today is date'
          }
          error={true}
        />
      )}
    </div>
  );
};
