import React, { useState } from 'react';

const DropdownButton = () => {
    const Hover = ["block px-4 py-2 text-primary hover:bg-terceary"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className="inline-flex items-center justify-center px-20 py-2 bg-white rounded-full hover:bg-terceary"
        onClick={toggleMenu}
      >
        Productos y Servicios
        <svg
          className={`ml-2 h-4 w-4 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-2">
            <a
              href="#"
              className={Hover}
            >
              Producto 1
            </a>
            <a
              href="#"
              className={Hover}
            >
              Producto 2
            </a>
            <a
              href="#"
              className={Hover}
            >
              Servicio 1
            </a>
            <a
              href="#"
              className={Hover}
            >
              Servicio 2
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;