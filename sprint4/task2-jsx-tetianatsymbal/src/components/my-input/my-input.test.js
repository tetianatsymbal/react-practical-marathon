import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyInput from "./my-input.js";

it("Renders MyInput component without crashing", () => {
  render(<MyInput />);
});

it("Renders input tag with attr:id", () => {
  const { getByTestId } = render(<MyInput />);
  expect(getByTestId("element-input")).toHaveAttribute("id", "inp-num");
});

it("Renders input tag with attr:type", () => {
  const { getByTestId } = render(<MyInput />);
  expect(getByTestId("element-input")).toHaveAttribute("type", "number");
});
