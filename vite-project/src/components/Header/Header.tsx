import { Navigation } from '../Navigation/Navigation';
import './Header.scss';

const mainClass: string = 'header';

interface IHeader {
  title: string;
}

export const Header: Function = ({ title }: IHeader) => {
  return (
    <>
      <header className={mainClass}>
        <div className={`${mainClass}__title`}>{title}</div>
        <Navigation />
      </header>
    </>
  );
};
