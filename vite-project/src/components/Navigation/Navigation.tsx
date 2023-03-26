import './Navigation.scss';
import { NavLink } from 'react-router-dom';

const mainClass = 'navigation';

export const Navigation: () => JSX.Element = () => {
  return (
    <>
      <nav className={mainClass}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `active ${mainClass}__link` : `${mainClass}__link`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `active ${mainClass}__link` : `${mainClass}__link`
          }
          to="/about"
        >
          About us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `active ${mainClass}__link` : `${mainClass}__link`
          }
          to="/form"
        >
          Form
        </NavLink>
      </nav>
    </>
  );
};
