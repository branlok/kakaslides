// test-utils.jsx
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import themeReducer from "../features/settings/themeSlice";
import settingsReducer from "../features/settings/settings";
import inputReducer from "../features/userInputs/inputSlice";
import { ThemeProvider } from "styled-components";

import getBackgroundColor from "./getBackgroundColor";
import { useSelector } from "react-redux";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        theme: themeReducer,
        settings: settingsReducer,
        inputs: inputReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function ThemeWrapper({ children }) {
    let color = useSelector((state) => state.theme.bgColor);
    let bgHexCode = getBackgroundColor(color);
    return <ThemeProvider theme={bgHexCode}>{children}</ThemeProvider>;
  }

  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };

/* 
original wrapper without additional providers from https://redux.js.org/usage/writing-tests:

// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import userReducer from '../userSlice'

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
*/
