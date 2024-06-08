
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




function App() {
  return (
    <div className="bg-secondary min-h-screen">
      <NavBar></NavBar>
      <Layaut>
        <Routes>
        <Route path='/inicio' element={<Start></Start>}></Route>
        <Route path='/taller' element={<Workshop></Workshop>}></Route>
        <Route path='/imagenes' element={<Images></Images>}></Route>
        <Route path='/acceso' element={<Login></Login>}></Route>
        <Route path='/registro' element={<Register></Register>}></Route>
        <Route path='/*' element={<Navigate to="/inicio"></Navigate>}></Route>
        </Routes>
      </Layaut>
      <Bloques />
      <Footer />
    </div>
  );
}

export default App
