import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/Home'
import Introduction from './pages/Introduction'
import RentProduct from './pages/RentProduct'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroPenghu from './pages/IntroAreas/IntroPenghu'
import IntroGreenIslannd from './pages/IntroAreas/IntroGreenIsland'
import IntroLanyu from './pages/IntroAreas/IntroLanyu'
import IntroLittle from './pages/IntroAreas/IntroLittle'

import Surf from './pages/Rent/Surf'
import Sup from './pages/Rent/Sup'
import Canoe from './pages/Rent/Canoe'
import Dive from './pages/Rent/Dive'
import Activityset from './pages/Rent/Activityset'
import Other from './pages/Rent/Other'



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:suggestId" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/rentproduct" element={<RentProduct />} />

        <Route path="/category/綠島" element={<IntroGreenIslannd />} />
        <Route path="/category/蘭嶼" element={<IntroLanyu />} />
        <Route path="/category/澎湖" element={<IntroPenghu />} />
        <Route path="/category/小琉球" element={<IntroLittle />} />

        <Route path="/surf" element={<Surf />} />
        <Route path="/sup" element={<Sup />} />
        <Route path="/canoe" element={<Canoe />} />
        <Route path="/dive" element={<Dive />} />
        <Route path="/activityset" element={<Activityset />} />
        <Route path="/other" element={<Other />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
