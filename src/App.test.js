import {  screen } from '@testing-library/react';
import {render} from "./utils/testUtils";

import App from './App';

it('renders screen', () => {
  render(<App/>)
  expect(screen.getByTestId("App")).toBeInTheDocument();
});


