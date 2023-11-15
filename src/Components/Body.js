import { RES_DETAILS } from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
import { useState } from 'react'

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(RES_DETAILS)
  return (
    <div className='body-container'>

      <div className='filter'>
        <button 
          className='filter-btn'
          onClick={() => {
            const filterData = listOfRestaurants.filter((item) => {
              return item.info.avgRating >= 4
            })
            setListOfRestaurants(filterData)
          }}
        >
          Top Rated Restaurantes
        </button>
      </div>
      
      <div className='res-container'>
        {/* restaurant card */}
        {listOfRestaurants.map((item) => {
          return (
            <RestaurantCard 
              key={item.info.id}
              resData={item.info}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Body