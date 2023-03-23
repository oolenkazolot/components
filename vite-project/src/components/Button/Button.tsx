import './Button.scss';
const mainClass: string = 'btn';
import { IButton } from '../../models';

export const Button: (props: IButton) => JSX.Element = ({ content, attributes }: IButton) => {
  return (
    <button className={mainClass} {...attributes}>
      {content}
    </button>
  );
};
