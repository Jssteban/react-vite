import { NavLink } from "react-router-dom";

const NavBar = () =>{
    const Hover = 'mr-5 hover:text-terceary'
    return(
        <>
      <header className="text-white body-font bg-primary">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-primary p-2 bg-terceary rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-terceary">Garapp</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/inicio" className={Hover}> inicio</NavLink>
          <NavLink to="/taller" className={Hover}> taller</NavLink>
          <NavLink to="/imagenes" className={Hover} > imagenes</NavLink>
          <NavLink to="/acceso" className={Hover}> acceso</NavLink>
          <NavLink to="/registro" className={Hover} > registro</NavLink>
        </nav>
        <button className="inline-flex items-center bg-secondary border-0 py-1 px-3 focus:outline-none hover:bg-terceary rounded-full text-primary mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
        </>
    )
}
export default NavBar;