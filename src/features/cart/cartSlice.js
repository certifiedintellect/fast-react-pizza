import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'cheese',
  //     quantity: 2,
  //     unitPrice: 10,
  //     totalPrice: 20,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    removeItem(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload
      );
    },

    increaseQuantity(state, action) {
      const pizzaItem = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload
      );
      pizzaItem.quantity++;
      pizzaItem.totalPrice = pizzaItem.quantity * pizzaItem.unitPrice;
    },

    decreaseQuantity(state, action) {
      const pizzaItem = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload
      );
      pizzaItem.quantity--;
      pizzaItem.totalPrice = pizzaItem.quantity * pizzaItem.unitPrice;

      if (pizzaItem.quantity === 0) {
        cartSlice.caseReducers.removeItem(state, action);
      }
    },

    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
