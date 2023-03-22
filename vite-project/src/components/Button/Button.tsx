import './Button.scss';
const mainClass: string = 'btn';

interface IButton {
  className?: string;
  content?: string;
  attributes: Record<string, string | boolean>;
}

export const Button: (props: IButton) => JSX.Element = ({ content, attributes }: IButton) => {
  return (
    <button className={mainClass} {...attributes}>
      {content}
    </button>
  );
};
