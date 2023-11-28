import { useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineState'
const Header = () => {

  const [btnName, setBtnName] = useState('Login') 

  const onlineStatus = useOnlineStatus()
  return (
    <div className='header'>
      
      <div className='logo-container'>
        <img
          className='logo'
          src={LOGO_URL}
        />
      </div>
      
      <div className='nav-items'>
        <ul>
          <li>Online Status: {onlineStatus ? "online" : "offline"}</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About U</Link>s</li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/grocery'>Grocery</Link></li>
          <li>Cart</li>
          <button
            className='login-btn'
            onClick={() => {
              setBtnName(prev => prev === "Login" ? "Logout" : "Login")
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  )
}
export default Header