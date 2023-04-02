import './Select.scss';
import { Message } from '../Message/Message';
import { ISelect } from '../../models';
const mainClass = 'select-block';

export const Select: (props: ISelect) => JSX.Element = ({
  options,
  defaultOption,
  content,
  register,
  error,
}: ISelect) => {
  const selectClass: string = error
    ? `${mainClass}__select ${mainClass}__select--error`
    : `${mainClass}__select`;
  return (
    <div className={mainClass}>
      <label className={`${mainClass}__label`}>
        {content}
        <select defaultValue={defaultOption} className={selectClass} {...register}>
          <option disabled>{defaultOption}</option>
          {options.map((value: string) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </label>
      {error && error.type === 'select' && (
        <Message message={'Field is required'} error={!!error} />
      )}
    </div>
  );
};
