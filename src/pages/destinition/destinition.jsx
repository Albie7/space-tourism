import './destinition.style.scss'
import moon from '../../assets/destination/image-moon.webp'

import { NavLink,BrowserRouter as Router,Route,Routes } from 'react-router-dom'

const DestinitionNav = () =>{
    return(<div className='destinition-navbar'>
        <NavLink to='/destinition' end>MOON</NavLink>
        <NavLink to='/destinition/mars'>MARS</NavLink>
        <NavLink to='/destinition/europa'>EUROPA</NavLink>
        <NavLink to='/destinition/titan'>TITAN</NavLink>
    </div>)
}

const Moon = () =>{
    return(<div className='destinition'>
        <div className='planet-image'>
            <h2>01 PICK YOUR DESTINITION</h2>
            <img src={moon}></img>
        </div>
        <div className='planet-info'>
             <DestinitionNav/>
             <h2>MOON</h2>
            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <div className='nav-line'></div>
            <div className='planet-text'>
                <div><p>avg distance</p>
                <h3>384,400km</h3>
                </div>
                <div><p>est. travel time</p>
                <h3>3 DAYS</h3>
                     </div>
            </div>
        </div>
    </div>)
}

const Destinition = () =>{
    return(<Moon/>)
}
export default Destinition