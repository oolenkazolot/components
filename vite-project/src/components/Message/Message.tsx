import './Message.scss';
type TMessage = {
  message: string;
};

export const Message: (props: TMessage) => JSX.Element = ({ message }) => {
  return <span>{message}</span>;
};
