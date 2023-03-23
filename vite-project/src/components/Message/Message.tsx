import './Message.scss';
const mainClass: string = 'message';
import { IMessage } from '../../models';

export const Message: (props: IMessage) => JSX.Element = ({ message }) => {
  return <span className={mainClass}>{message}</span>;
};
