import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
