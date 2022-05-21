import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Elana</Link>
        </div>
        <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
        </ul>
    </header>
  )
}

export default Navbar