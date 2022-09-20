import './home.style.scss'

import { Link } from 'react-router-dom'

const Home = () =>{
    return(<div className='home'>
        <div className='home-text'>
            <h2>So,you want to travel to</h2>
            <h1>SPACE</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='home-link'>
            <div className='home-link-glass'></div>
            <div className='home-link-text'>
            <Link to='destinition'>EXPLORE</Link>
            </div>
        </div>
    </div>)
}
export default Home