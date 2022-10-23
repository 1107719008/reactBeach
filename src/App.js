import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/Home'

import Introduction from './pages/Introduction'
import RentProduct from './pages/RentProduct'

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction/>} />
          <Route path="/rentproduct" element={<RentProduct/>} />
  
          
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
