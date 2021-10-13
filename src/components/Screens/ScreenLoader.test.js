import React from "react";
import { cleanup, screen, fireEvent, within } from "@testing-library/react";
import ScreenLoader from "./ScreenLoader";
import { render } from "../../utils/testUtils";
import theme from "../../globalStyles/theme";

afterEach(cleanup);

it("renders with redux default values", () => {
  //renders correct color.
  render(<ScreenLoader />);
  expect(screen.getByTestId("screenbg")).toHaveStyle(
    "background-color: #DD0A0A"
  );
  //renders correct screen style.
  expect(screen.getByTestId("messageScreen")).toBeInTheDocument();

  //renders bars to exist.
  screen.getAllByTestId("blackbars").forEach((item) => {
    expect(item).toBeVisible;
  });
});


it("opens toolkit, clicking colors changes background color", () => {
  //OPEN TOOLBAR
  render(<ScreenLoader />);
  let openToolbar = screen.getByTestId("openToolbarBtn");
  expect(openToolbar).toBeInTheDocument();

  fireEvent(
    openToolbar,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  //CLICK COLOR, CHECK BACKGROUND COLOR
  let OpenedToolbar = screen.getByRole("listbox");
  within(OpenedToolbar)
    .getAllByRole("button")
    .forEach((item) => {
      let currentColor = item.getAttribute("color");
      fireEvent(
        item,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
      expect(screen.getByTestId("screenbg")).toHaveStyle(
        `background-color: ${theme[currentColor].bg}`
      );
    });
});