import Start from '../pages/start.jsx';
import Workshop from '../pages/workshop.jsx';
import Login from '../pages/login.jsx';
import Register from '../pages/register.jsx';
import Images from '../pages/images.jsx';
import HomeEntry from '../pages/home_entry.jsx';
import { Navigate } from 'react-router-dom';

const routes = [
    {
        path:'/inicio',
        element:<Start />,
    },
    {
        path:'/taller',
        element:<Workshop />,
    },
    {
        path:'/imagenes',
        element:<Images />,
    },
    {
        path:'/acceso',
        element:<Login />,
    },
    {
        path:'/registro',
        element:<Register />,
    },
    {
        path:'/InicioIngreso',
        element:<HomeEntry />,
    },
    {
        path:'/*',
        element:<Navigate to ="/" />,
    },
   
] 
export default routes;