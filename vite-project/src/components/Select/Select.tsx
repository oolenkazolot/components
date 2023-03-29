import './Select.scss';
import { Message } from '../Message/Message';
import { ISelect } from '../../models';
const mainClass: string = 'select-block';

export const Select: (props: ISelect) => JSX.Element = ({
  options,
  defaultOption,
  content,
  register,
  errorMessage,
  isError,
}: ISelect) => {
  return (
    <div className={mainClass}>
      <label className={`${mainClass}__label`}>{content}</label>
      <select defaultValue={defaultOption} className={`${mainClass}__select`} {...register}>
        <option disabled>{defaultOption}</option>
        {options.map((value: string) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
      {isError && <Message message={errorMessage} isError={isError} />}
    </div>
  );
};
