import Navbar from "./components/navbar/navbar";

import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
// Data
import Data from './data.json'
// **********Planets**********
import moon from './assets/destination/image-moon.webp'
import mars from './assets/destination/image-mars.webp'
import europa from './assets/destination/image-europa.webp'
import titan from './assets/destination/image-titan.webp'
// *************Pages****************
import Home from "./pages/home/home";
import Destinition from "./pages/destinition/destinition";
import Crew from "./pages/crew/crew";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="destinition/moon" element={<Destinition Data={Data} i={0} planet={moon}/>}/>
        <Route path="destinition/mars" element={<Destinition Data={Data} i={1} planet={mars}/>}/>
        <Route path="destinition/europa" element={<Destinition Data={Data} i={2} planet={europa}/>}/>
        <Route path="destinition/titan" element={<Destinition Data={Data} i={3} planet={titan}/>}/>
        <Route path="crew" element={<Crew data={Data}/>}/>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;
