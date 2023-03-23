import { Navigation } from '../Navigation/Navigation';
import './Header.scss';
import { IHeader } from '../../models';
const mainClass = 'header';

export const Header: (props: IHeader) => JSX.Element = ({ title }: IHeader) => {
  return (
    <>
      <header className={mainClass}>
        <div className={`${mainClass}__title`}>{title}</div>
        <Navigation />
      </header>
    </>
  );
};
