import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleCart,
  closeCart,
} = cartSlice.actions;

export default cartSlice.reducer;
