import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import DropdownButton from "./DropdownButton";


const NavBar = () => {
  const Hover = "mr-5 hover:text-terceary";

  return (
    <>
      <nav className="bg-primary p-4">
        <div className="flex justify-center items-center flex-col md:flex-row ">
          <div className="flex items-center mb-4 md:mb-0 justify-center">
            <BurgerMenu />
            <span className="text-3xl text-terceary ml-4">Garapp</span>
          </div>
          <div className="flex items-center flex-col md:flex-row mx-8">
            <button className="bg-white px-3 hover:bg-terceary rounded-full text-primary mb-4 md:mb-0 md:mr-4 p-2">
              Ubicación
            </button>
            <DropdownButton />
            <button className="bg-white px-8 hover:bg-terceary rounded-full text-primary ml-4 mt-4 md:mt-0 md:ml-4 p-2">
            <NavLink to="/registro">Registro</NavLink>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
