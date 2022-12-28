import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart.slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
