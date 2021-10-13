import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    default: true,
    settingsOpen: false,
  },
  reducers: {
    toggleSettings: (state, action) => {

      state.settingsOpen = action.payload;
    },
  },
});

export const { toggleSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
