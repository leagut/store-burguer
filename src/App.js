import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Comidas } from './pages/Comidas';
import { Notfound } from './pages/Notfound';


function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='comidas' element={<Comidas/>}>  
     <Route path=':category' element={<Comidas/>} />
    </Route>
    <Route path='*' element={<Notfound/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>

    
  );
}

export default App;
