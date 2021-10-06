import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "inputs",
  initialState: {
    mainText: null,
    secondaryText: null,
    numberText: null,
  },
  reducers: {
    changeText: (state, action) => {
      state.mainText = action.payload.mainText;
      state.secondaryText = action.payload.secondaryText;
      state.numberText = action.payload.numberText;
    },
  },
});

export const { changeText } = inputSlice.actions;
export default inputSlice.reducer;
