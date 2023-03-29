import './Input.scss';
import { IInput } from '../../models';
import { Message } from '../Message/Message';
const mainClass = 'input-block';

export const Input: (props: IInput) => JSX.Element = ({
  content,
  register,
  attributes,
  errorMessage,
  isError,
}: IInput) => {
  return (
    <div className={mainClass}>
      <label className={`${mainClass}__label`}>
        {content}
        <input className={`${mainClass}__input`} {...register} {...attributes} />
      </label>
      {isError && <Message message={errorMessage} isError={isError} />}
    </div>
  );
};
