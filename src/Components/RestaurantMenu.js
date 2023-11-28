import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"


const RestaurantMenu = () => {
  const { resId } = useParams()

  const resData = useRestaurantMenu(resId)

  if(resData === null ) return <Shimmer />

  const {name, costForTwoMessage, cuisines} = resData?.cards[0]?.card?.card?.info

  const { itemCards } = resData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards && itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - ${item.card.info.price/100}</li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu