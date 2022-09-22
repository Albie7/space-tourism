import './navbar.style.scss'

import {NavLink ,Link} from 'react-router-dom'
import logo from '../../assets/shared/logo.svg'

const Navbar = () =>{
    return(
        <div className='navbar'>
            <div className='logo-container'>
                <Link to='/'><img src={logo} /></Link>
            </div>
            <div className='nav-links'>
            <div className='nav-line'></div>
                <ul>
                    <NavLink className='nav-link' activeClassName='active-link' to='' end>00 Home</NavLink>
                    <NavLink className='nav-link'  to='destinition/moon'>01 Destinition</NavLink>
                    <NavLink className='nav-link'  to='crew'>02 Crew</NavLink>
                    <NavLink className='nav-link'  to='technology'>03 Technology</NavLink>
                </ul>
            </div>
        </div>
    )
}
export default Navbar