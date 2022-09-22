import './destinition.style.scss'


import { NavLink,BrowserRouter as Router,Route,Routes } from 'react-router-dom'

const DestinitionNav = () =>{
    return(<div className='destinition-navbar'>
        <NavLink to='/destinition/moon' end>MOON</NavLink>
        <NavLink to='/destinition/mars'>MARS</NavLink>
        <NavLink to='/destinition/europa'>EUROPA</NavLink>
        <NavLink to='/destinition/titan'>TITAN</NavLink>
    </div>)
}


const Destinition = ({Data,i,planet}) =>{
    return(<div className='destinition'>
    <div className='planet-image'>
        <h2><span>01</span> PICK YOUR DESTINITION</h2>
        <img src={planet}></img>
    </div>
    <div className='planet-info'>
         <DestinitionNav/>
         <h2>{Data.destinations[i].name}</h2>
        <p>{Data.destinations[i].description}</p>
        <div className='nav-line'></div>
        <div className='planet-text'>
            <div><p>avg distance</p>
            <h3>{Data.destinations[i].distance}</h3>
            </div>
            <div><p>est. travel time</p>
            <h3>{Data.destinations[i].travel}</h3>
                 </div>
        </div>
    </div>
</div>)
}
export default Destinition;