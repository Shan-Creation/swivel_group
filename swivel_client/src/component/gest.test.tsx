import React from "react";
import { render } from "@testing-library/react";
import App from "./gest";

test("renders You are not loged in...", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/You are not loged in.../i);
  expect(textElement).toBeInTheDocument();
});

test("renders Please login here", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Please login here/i);
  expect(textElement).toBeInTheDocument();
});
