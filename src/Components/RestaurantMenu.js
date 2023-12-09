import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"

const RestaurantMenu = () => {
  const { resId } = useParams()

  const resData = useRestaurantMenu(resId)
  const [showIndex, setShowIndex] = useState(0)

  if(resData === null ) return <Shimmer />

  const {name, costForTwoMessage, cuisines} = resData?.cards[0]?.card?.card?.info

  const { itemCards } = resData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  
  const categories = 
    resData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => {
      return item.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

  // console.log("categories", categories)
  
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p
        className="font-bold text-lg"
      >
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* categorries accordions */}
      {categories.map((item, index) => {
        return (
          <RestaurantCategory 
            key={index}
            data={item?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              index === showIndex ? setShowIndex(null) : setShowIndex(index)
            }}
          />
        )
      })}
    </div>
  )
}

export default RestaurantMenu