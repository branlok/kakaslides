import { screen, fireEvent } from "@testing-library/react";
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
  let openToolbar = screen.getByTestId("openToolbarBtn");
  expect(openToolbar).toBeInTheDocument();

  fireEvent(
    openToolbar,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  let toolbar = screen.getByRole("listbox");
  let closeToolbarBtn = screen.getByText("Hide");

  expect(toolbar).toBeInTheDocument();

  fireEvent(
    closeToolbarBtn,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

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
