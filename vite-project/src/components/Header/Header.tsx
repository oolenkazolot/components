import { useLocation } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { getTitleHeader } from '../../utils/getTitleHeader';
import './Header.scss';

const mainClass = 'header';

export const Header: () => JSX.Element = () => {
  const currentLocation = useLocation();
  return (
    <>
      <header className={mainClass}>
        <div className={`${mainClass}__title`}>{getTitleHeader(currentLocation.pathname)}</div>
        <Navigation />
      </header>
    </>
  );
};
