import Navbar from "./components/navbar/navbar";

import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'

import Home from "./pages/home/home";
import Destinition from "./pages/destinition/destinition";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="destinition" element={<Destinition/>}/>
        <Route path="destinition/mars" element={<Destinition/>}/>
        <Route path="destinition/titan" element={<Destinition/>}/>
        <Route path="destinition/europa" element={<Destinition/>}/>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;
