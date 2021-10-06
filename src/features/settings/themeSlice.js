import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    bgColor: "red",
    templateStyle: "message",
    inverted: false,
  },
  reducers: {
    changeBg: (state, action) => {
      console.log(action.payload);
      state.bgColor = action.payload;
    },
    changeTemplateStyle: (state, action) => {
      state.templateStyle = action.payload;
    },
    invert: (state) => {
      state.invert = !state.invert;
    },
  },
});

export const { changeBg, changeTemplateStyle, invert } = themeSlice.actions;

export default themeSlice.reducer;
