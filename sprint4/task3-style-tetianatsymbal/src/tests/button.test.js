import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button from "../components/button/button.js";

it("Renders Button without crashing", () => {
  render(<Button />);
});

it("Renders Button correctly", () => {
  const { getByTestId } = render(<Button />);
  expect(getByTestId("element-button")).toHaveTextContent("Wake up Neo...");
});

it("Renders Button with styles", () => {
  const { getByTestId } = render(<Button />);
  expect(getByTestId("element-button")).toHaveStyle(`
        color : rgb(18, 255, 18);
        background-color : transparent;
        border : 0;
        font-family : Courier;
        font-size : 33pt
    `);
});
