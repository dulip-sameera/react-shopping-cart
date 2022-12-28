import { configureStore } from "@reduxjs/toolkit";
import { bgImgReducer } from "./features/bgImage.slice";
import { cartReducer } from "./features/cart.slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    bgImg: bgImgReducer,
  },
});
