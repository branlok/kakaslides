import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    bgColor: "red",
    templateStyle: "message",
    inverted: false,
    texture: "horizontalTexture",
    blackBars: true,
    custom: "",
    jitterDefault: true,
    blackFont: false,
  },
  reducers: {
    changeBg: (state, action) => {
      state.bgColor = action.payload;
    },
    changeTemplateStyle: (state, action) => {
      state.templateStyle = action.payload;
    },
    invert: (state, action) => {
      state.invert = !action.invert;
    },
    changeTexture: (state, action) => {
      state.texture = action.payload;
    },
    toggleblackBars: (state, action) => {
      state.blackBars = action.payload;
    },
    setCustom: (state, action) => {
      state.custom = action.payload;
    },
    setJitter: (state, action) => {
      state.jitterDefault = action.payload;
    },
    setBlackFont: (state, action) => {
      state.blackFont = action.payload;
    },
  },
});

export const {
  changeBg,
  changeTemplateStyle,
  invert,
  changeTexture,
  toggleblackBars,
  setCustom,
  setJitter,
  setBlackFont,
} = themeSlice.actions;

export default themeSlice.reducer;
