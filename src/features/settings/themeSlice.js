import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    bgColor: "red",
    templateStyle: "message",
    inverted: false,
    texture: "horizontalTexture",
    blackBars: true,
  },
  reducers: {
    changeBg: (state, action) => {
      console.log(action.payload);
      state.bgColor = action.payload;
    },
    changeTemplateStyle: (state, action) => {
      state.templateStyle = action.payload;
    },
    invert: (state,action) => {
      state.invert = !action.invert;
    },
    changeTexture: (state, action) => {
      state.texture = action.payload
    },
    toggleblackBars: (state, action) => {
      state.blackBars = action.payload
    }
  },
});

export const { changeBg, changeTemplateStyle, invert, changeTexture, toggleblackBars } = themeSlice.actions;

export default themeSlice.reducer;
