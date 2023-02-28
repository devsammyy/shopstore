import { createSlice } from "@reduxjs/toolkit";
import { data } from "../services/services";

const cartSlice = createSlice({
  name: "cart",
  initialState: { data },
  reducers: {
    cartItems: (state) => {
      state;
    },
  },
});

export const { cartItems } = cartSlice.actions;
export default cartSlice.reducer;
