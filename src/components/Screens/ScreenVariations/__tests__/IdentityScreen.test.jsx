import { screen } from "@testing-library/react";
import IdentityScreen from "../IdentityScreen";
import { render } from "../../../../utils/testUtils";
it("renders componenet without error", () => {
  render(<IdentityScreen />);
});

it("renders default text", () => {
  render(<IdentityScreen />);
  expect(screen.getByText("蟹")).toHaveTextContent("蟹");
});
