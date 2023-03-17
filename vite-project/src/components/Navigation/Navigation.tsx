import './Navigation.scss';
import { NavLink } from 'react-router-dom';

const mainClass: string = 'navigation';

export const Navigation: Function = () => {
  return (
    <>
      <nav className={mainClass}>
        <NavLink className={({ isActive }) => (isActive ? `active ${mainClass}__link` : `${mainClass}__link`)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `active ${mainClass}__link` : `${mainClass}__link`)} to="/about">
          About us
        </NavLink>
      </nav>
    </>
  );
};
