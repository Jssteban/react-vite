
import Button from './components/button.jsx'
import Layaut from './components/layaut.jsx'
import NavBar from './components/navbar.jsx';
import Bloques from './components/bloques.jsx';
import {  Navigate, Route, Routes } from 'react-router-dom';
import Start from './pages/start.jsx';
import Workshop from './pages/workshop.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Images from './pages/images.jsx';
import Footer from './components/footer.jsx';
import homeEntry from './pages/home_entry.jsx';
import routes from './routes/route.jsx'






function App() {
  return (
    <div className="bg-secondary min-h-screen">
      <NavBar />
      <Layaut>
        <Routes>
          {routes.map(({path,element})=>(
        <Route path={path} element={element}/>
          ))}
        </Routes>
      </Layaut>
      <Bloques />
      <Footer />
    </div>
  );
}

export default App
