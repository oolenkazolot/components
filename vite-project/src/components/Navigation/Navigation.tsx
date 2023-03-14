import React from 'react';
import './Navigation.scss';
import { NavLink, NavLinkProps } from 'react-router-dom';

const mainClass: string = 'navigation';

export const Navigation: Function = () => {
  return (
    <>
      <nav className={mainClass}>
        <NavLink className={({ isActive }: NavLinkProps) => (isActive ? `active ${mainClass}__link` : `${mainClass}__link`)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }: NavLinkProps) => (isActive ? `active ${mainClass}__link` : `${mainClass}__link`)} to="/about">
          About us
        </NavLink>
      </nav>
    </>
  );
};
