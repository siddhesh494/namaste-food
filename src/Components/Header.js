import { useContext, useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineState'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'
const Header = () => {

  const [btnName, setBtnName] = useState('Login') 
  const {loggedInUser} = useContext(UserContext)

  const cartItems = useSelector((store) => store.cart.items)
  const onlineStatus = useOnlineStatus()
  return (
    <div className='flex items-center justify-between bg-pink-50 shadow-lg md:bg-yellow-50'>
      
      <div className='logo-container'>
        <img
          className='w-48'
          src={LOGO_URL}
        />
      </div>
      
      <div className='nav-items'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>Online Status: {onlineStatus ? "online" : "offline"}</li>
          <li className='px-4'><Link to='/'>Home</Link></li>
          <li className='px-4'><Link to='/about'>About U</Link>s</li>
          <li className='px-4'><Link to='/contact'>Contact Us</Link></li>
          <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
          <li className='px-4 font-bold'><Link to="/cart"> Cart ({cartItems.length})</Link></li>
          <button
            className='login-btn'
            onClick={() => {
              setBtnName(prev => prev === "Login" ? "Logout" : "Login")
            }}
          >
            {btnName}
          </button>

          <li className='px-4 font-bold'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}
export default Header