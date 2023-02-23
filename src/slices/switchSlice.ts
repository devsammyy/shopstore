import { createSlice } from "@reduxjs/toolkit";

const switchSlice = createSlice({
  name: "switch",
  initialState: {
    switch: false,
  },
  reducers: {
    toggle: (state) => {
      state.switch = true;
    },
  },
});

export const { toggle } = switchSlice.actions;

export default switchSlice.reducer;
