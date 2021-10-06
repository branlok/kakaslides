import React from "react";
import { cleanup, screen } from "@testing-library/react";
import ScreenLoader from "./ScreenLoader";
import { render } from "../../utils/testUtils";

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
