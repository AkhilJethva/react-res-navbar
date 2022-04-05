import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/Index';
import ContactUs from './components/ContactUs';
import Home from './components/Home/Index';
import Navbar from './components/Navbar/Index';
import Services from './components/Services/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />    
          <Routes>
            <Route path='/' element={<Home/> } exact/>
            <Route path='/services' element={<Services/> } />
            <Route path='/about' element={<About/> } exact/>
            <Route path='/contact-us' element={<ContactUs/>}/>
          </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
