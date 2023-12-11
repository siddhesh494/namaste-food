import { useDispatch } from "react-redux"
import { addItem } from '../utils/cartSlice'
import { CDN_URL } from "./../utils/constants"

const ItemList = ({items}) => {

  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    // dispatching the action
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="">{item.card.info.name}</span>
                <span> - ₹ {(item.card.info.price || item.card.info.defaultPrice)/100}</span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="p-4 w-3/12">
              <img src={CDN_URL+item.card.info.imageId} className="w-full" />
              <div className="absolute">
              <button 
                className="p-2 m-auto rounded-lg bg-white shadow-lg"
                onClick={() => handleAddItem(item)}
              > 
                Add+
              </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ItemList