import React from 'react'
import ReactDOM from 'react-dom/client'
import { RES_DETAILS } from './Constant'
// planing
/*
* Header
* - logo
* - Nav Items
* Body
* - Search
* - Restaurant container
*   - card
*     - img
*     - Name of res, start rating
*     - cuisine
*     - deleviry time
*
*
*
* 
* Footer
*   - copy rights
*   - links
*   - Address
*   - Contact

*/

const Header = () => {
  return (
    <div className='header'>
      
      <div className='logo-container'>
        <img
          className='logo'
          src="https://www.logodesign.net/logo/smoking-burger-with-lecttuce-3624ld.png"
        />
      </div>
      
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = ({
  resData
}) => {
  return (
    <div className='res-card' style={{
      backgroundColor: "#f0f0f0"
    }}>
      <img 
        className='res-logo'
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${resData.cloudinaryImageId}`}
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla.deliveryTime} minutes</h4>
    </div>
  )
}


const Body = () => {
  return (
    <div className='body-container'>

      <div className='search'>
        Search
      </div>
      
      <div className='res-container'>
        {/* restaurant card */}
        {RES_DETAILS.map((item) => {
          return (
            <RestaurantCard 
              key={item.info.id}
              resData={item.info}
            />
          )
        })}
        
        {/* <RestaurantCard 
          resName="kFC"
          cuisine= "Burger, Fast food"
        /> */}


      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <AppLayout />
)