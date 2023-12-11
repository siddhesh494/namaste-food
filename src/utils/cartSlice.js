import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name:'cart',
  initialState: {
    items: []
  },
  reducers: {
    // This is our reducer function
    addItem: (state, action) => {
      // mutating teh state here
      state.items.push(action.payload)
    },
    removeItem: (state) => {
      state.items.pop()
    },
    clearCart: (state) => {
      state.items.length = 0
      // state.items = [] // This will not work
    }

  }
})
export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer