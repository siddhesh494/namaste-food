import { useEffect, useState } from "react"
import { RESTAURANT_MENU } from "./constants"

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null)

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

  return resData

}

export default useRestaurantMenu;