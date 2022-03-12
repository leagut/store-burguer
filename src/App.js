import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Comidas } from './pages/Comidas';
import { Notfound } from './pages/Notfound';
import { Car } from './pages/Car';
import { Context } from './hooks/Context'
import { useState } from 'react';

function App() {
  const [carrito,setCarrito]= useState([])
  return (



    <BrowserRouter>
      <Context.Provider value={{carrito,setCarrito}} >

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='carrito' element={<Car />} />
          <Route path='comidas' element={<Comidas />}>
            <Route path=':category' element={<Comidas />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </Context.Provider>

    </BrowserRouter>


  );
}

export default App;
