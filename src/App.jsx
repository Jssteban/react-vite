
import Layaut from './components/layaut.jsx'
import NavBar from './components/navbar.jsx';
import Bloques from './components/bloques.jsx';
import {  Route, Routes } from 'react-router-dom';
import Footer from './components/footer.jsx';
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
