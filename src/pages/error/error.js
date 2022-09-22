import './error.style.scss'
import { Link } from 'react-router-dom'

const Error = () => {
    return(
        <div className='error'>
            <h2>Error 404</h2>
            <h3>Page Not Found</h3>
            <button><Link to=''>Get Back, Home</Link></button>

        </div>
    )
}
export default Error