import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {

  const cartItem = useSelector((store) => store.cart.items)
  console.log(cartItem)
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div
      className="text-center m-10 p-10"
    >
      <h1 className="text-2xl font-bold">Cart</h1>
      
      <div className="w-6/12 m-auto">
        <button 
          className="p-2 m-2 bg-black text-white rounded-lg "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItem.length === 0 ? (
          <h1>Cart is empty Add Items to the cart!</h1>
        ) : (
          <ItemList 
            items={cartItem}
          />
        )}
      </div>
    </div>
  )
}

export default Cart