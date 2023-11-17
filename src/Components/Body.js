import { RES_DETAILS } from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0238398&lng=73.0991739&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
  
      const json = await data.json()
      // console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
      setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
    } catch (error) {
      console.log(error)
    }
    }

  return listOfRestaurants && listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className='body-container'>

      <div className='filter'>
        <div>
          <input 
            type="text" 
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <button
            onClick={() => {
                const filtered = listOfRestaurants.filter(
                  (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
                setFilteredRestaurants(filtered)
              
            }}
          >
            Search
          </button>
        </div>
        <button 
          className='filter-btn'
          onClick={() => {
            const filterData = listOfRestaurants.filter((item) => {
              return item.info.avgRating >= 4
            })
            setFilteredRestaurants(filterData)
          }}
        >
          Top Rated Restaurantes
        </button>
      </div>
      
      <div className='res-container'>
        {/* restaurant card */}
        {filteredRestaurants && filteredRestaurants.map((item) => {
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