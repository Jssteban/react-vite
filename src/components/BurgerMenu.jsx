import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";


const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const hover = 'block py-2 px-3 hover:bg-terceary rounded transition-colors duration-300 ease-in-out'

  return (
    <div className="relative flex items-center justify-center">
      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        className="inline-flex items-center justify-center w-10 h-10 text-lg rounded-lg focus:outline-none focus:ring-2  dark:text-terceary  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-hamburger" 
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only"> menu</span>
        <FiMenu size={'60'}/>
      </button>
      {isOpen && (
        <div
          className="fixed left-0 top-0 h-screen w-fit bg-secondary text-primary z-10"
          id="navbar-hamburger"
        >
          <ul className="flex flex-col m-4">
            <div className='flex gap-4 '>
            <li className={`${hover} capitalize font-bold bg-primary text-secondary rounded-lg`}>
            <NavLink to="/inicio">iniciar sesion</NavLink>
            </li>
            <li className={`${hover} capitalize font-bold bg-primary text-secondary rounded-lg`}>
            <NavLink to="/registro">Registrarse</NavLink>
            </li>
            </div>
            <li>
            <NavLink to="/InicioIngreso" className={`${hover} capitalize font-bold`}>Home</NavLink>
            </li>
            <li>
            <NavLink to="/" className={`${hover} capitalize font-bold`}>Almacenes</NavLink>
            </li>
            <li>
            <NavLink to="/" className={`${hover} capitalize font-bold`}>Talleres</NavLink> 
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;