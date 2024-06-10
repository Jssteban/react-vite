import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const hover = 'block py-2 px-3 hover:bg-terceary rounded'

  return (
    <div className="relative">
      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        className="inline-flex items-center justify-center p-2 w-10 h-10 text-lg rounded-lg focus:outline-none focus:ring-2  dark:text-terceary  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-hamburger"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only"> menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="fixed left-0 top-0 h-screen w-64 bg-primary text-secondary z-10"
          id="navbar-hamburger"
        >
          <ul className="flex flex-col mt-4">
            <li>
            <NavLink to="/inicio" className={hover}>iniciar session</NavLink>
            </li>
            <li>
            <NavLink to="/registro" className={hover}>Registrarse</NavLink>
            </li>
            <li>
            <NavLink to="/" className={hover}>Secciones</NavLink>
            </li>
            <li>
            <NavLink to="/" className={hover}>Almacenes</NavLink>
            </li>
            <li>
            <NavLink to="/" className={hover}>Talleres</NavLink> 
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;