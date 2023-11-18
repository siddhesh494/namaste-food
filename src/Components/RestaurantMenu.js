import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { RESTAURANT_MENU } from "../utils/constants"
const RestaurantMenu = () => {
  const [resData, setResData] = useState(null)
  const { resId } = useParams()
  
  useEffect(() => {
    fetchMenu()
  }, [])
  async function fetchMenu () {
    try {
      const data = await fetch(`${RESTAURANT_MENU}${resId}&catalog_qa=undefined&submitAction=ENTER`)
      const json = await data.json()
      setResData(json.data)
    } catch (error) {
      console.log(error)
    }
  }

  if(resData === null ) return <Shimmer />

  const {name, costForTwoMessage, cuisines} = resData?.cards[0]?.card?.card?.info

  const { itemCards } = resData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  console.log(itemCards)
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