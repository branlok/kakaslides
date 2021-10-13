import { screen, fireEvent, within } from "@testing-library/react";
import { object } from "prop-types";
import theme from "../../globalStyles/theme";
import { render } from "../../utils/testUtils";
import Toolbar from "./Toolbar";

it("renders correctly", () => {
  render(<Toolbar />);
  let openToolbar = screen.getByTestId("openToolbarBtn");
  expect(openToolbar).toBeInTheDocument();

  // let toolbar = screen.getByRole("listbox");
  // expect(toolbar).toBeInTheDocument();
});

it("toggle toolbar to remove or reappear", () => {
  render(<Toolbar />);
  //find toolbar
  let openToolbar = screen.getByTestId("openToolbarBtn");
  expect(openToolbar).toBeInTheDocument();

  //click open toolbar
  fireEvent(
    openToolbar,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  let toolbar = screen.getByRole("listbox");
  let closeToolbarBtn = screen.getByText("Hide");

  //expect listbox be in the document now
  expect(toolbar).toBeInTheDocument();

  //hide toolbar
  fireEvent(
    closeToolbarBtn,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  //expect to be gone now
  expect(toolbar).not.toBeInTheDocument();
  let toolbarWrapper = screen.getByTestId("toolbarWrapper");
  let openToolbarBtn = screen.getByTestId("openToolbarBtn");

  fireEvent(
    openToolbarBtn,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(toolbarWrapper).toBeInTheDocument();
});

it("shows correct number of colors to be shown in toolkit", () => {
  render(<Toolbar />);
  //OPEN TOOLBAR
  let openToolbar = screen.getByTestId("openToolbarBtn");
  expect(openToolbar).toBeInTheDocument();

  fireEvent(
    openToolbar,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  let themeArray = Object.keys(theme);

  let OpenedToolbar = screen.getByRole("listbox");

  //expect number of colors to be rendered
  expect(OpenedToolbar.children.length).toBe(themeArray.length - 2);

  //each attribute matches
  within(OpenedToolbar)
    .getAllByRole("button")
    .forEach((item) => {
      expect(themeArray.includes(item.getAttribute("color"))).toBe(true);
    });
});


