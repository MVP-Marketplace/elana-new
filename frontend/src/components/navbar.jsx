import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {practitionerUser} = useSelector((state) => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Elana</Link>
        </div>
        <ul>
          {practitionerUser ? (
            <li><button className='btn' onClick={onLogout}>Logout</button></li>
          ) : (<>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
          </>)}
            
        </ul>
    </header>
  )
}

export default Navbar