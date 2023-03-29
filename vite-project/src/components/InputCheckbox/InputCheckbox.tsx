import './InputCheckbox.scss';
import { IInputCheckbox } from '../../models';
import { Message } from '../Message/Message';
const mainClass = 'checkbox-block';

export const InputCheckbox: (props: IInputCheckbox) => JSX.Element = ({
  content,
  register,
  attributes,
  error,
}) => {
  return (
    <div className={mainClass}>
      <label className={`${mainClass}__label`}>
        <input type="checkbox" className={`${mainClass}__input`} {...register} {...attributes} />
        {content}
      </label>
      {error && <Message message={error.message || 'Error'} error={!!error.message} />}
    </div>
  );
};
