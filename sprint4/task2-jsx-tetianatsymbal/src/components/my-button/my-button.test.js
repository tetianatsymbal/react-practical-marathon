import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyButton from "./my-button.js";

it("Renders MyButton without crashing", () => {
  render(<MyButton />);
});

it("Renders MyButton as button tag", () => {
  const { getByRole } = render(<MyButton />);
  expect(getByRole("button")).toBeInTheDocument();
});

it("Renders MyButton correctly", () => {
  const { getByTestId } = render(<MyButton />);
  expect(getByTestId("element-button")).toHaveTextContent("Add to account");
});
