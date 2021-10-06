import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/settings/themeSlice";
import settingsReducer from "../features/settings/settings";
import inputReducer from "../features/userInputs/inputSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    settings: settingsReducer,
    inputs: inputReducer,
  },
});
