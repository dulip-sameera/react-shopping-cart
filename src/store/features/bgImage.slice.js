import { createSlice } from "@reduxjs/toolkit";
import { BG } from "../../data/imgs";

const bgImageSlice = createSlice({
  name: "bgImg",
  initialState: { value: BG },
  reducers: {
    addBgImage: (state, action) => {
      state.value = action.payload.bgImg;
    },

    resetBg: (state) => {
      state.value = BG;
    },
  },
});

export const bgImgReducer = bgImageSlice.reducer;
export const { addBgImage, resetBg } = bgImageSlice.actions;
export default bgImageSlice;
