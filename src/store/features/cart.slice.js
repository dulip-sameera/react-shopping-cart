import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCost: 0,
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.qty++;
        state.totalCost += existingItem.price;
        state.totalQty++;
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          qty: 1,
          imgUrl: action.payload.imgUrl,
        });
        state.totalCost += action.payload.price;
        state.totalQty++;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload.id;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return;

      if (existingItem.qty > 1) {
        existingItem.qty--;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
      state.totalQty--;
      state.totalCost -= existingItem.price;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice;
