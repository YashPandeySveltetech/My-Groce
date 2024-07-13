import {createSlice} from "@reduxjs/toolkit";

// Initial state with sample data
const initialState = [
  {
    id: 1,
    title: "EVEREST Dry Mango (Aam Choora)",
    price: 45.0,
    quantity: 1,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    title: "EVEREST hingraj",
    price: 31.0,
    quantity: 1,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    title: "Perdue Simply Smart Organics Gluten Free",
    price: 15.0,
    quantity: 1,
    image: "https://via.placeholder.com/50",
  },
];

// Create slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },

    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const {id, quantity} = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },

    clearCart: () => {
      return [];
    },
  },
});

// Export actions
export const {addItem, removeItem, updateQuantity, clearCart} =
  cartSlice.actions;

// Export reducer 
export default cartSlice.reducer;
