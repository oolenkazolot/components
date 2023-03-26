import './Message.scss';
const mainClass = 'message';
import { IMessage } from '../../models';

export const Message: (props: IMessage) => JSX.Element = ({ message, isError }) => {
  const className: string = isError ? `${mainClass} ${mainClass}--error` : mainClass;
  return <span className={className}>{message}</span>;
};
