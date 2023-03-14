import { Navigation } from '../Navigation/Navigation';
import './Header.scss';

const mainClass: string = 'header';

export const Header: Function = () => {
  return (
    <>
      <header className={mainClass}>
        <Navigation />
      </header>
    </>
  );
};
