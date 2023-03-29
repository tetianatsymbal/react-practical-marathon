import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyLabel from "./my-label.js";

it("Renders MyLabel without crashing", () => {
  const { getByTestId } = render(<MyLabel />);
  expect(getByTestId("element-label")).toBeInTheDocument();
});

it("Renders MyLabel with attr:for", () => {
  const { getByTestId } = render(<MyLabel />);
  expect(getByTestId("element-label")).toHaveAttribute("for", "inp-num");
});

it("Renders MyLabel with text", () => {
  const { getByTestId } = render(<MyLabel />);
  expect(getByTestId("element-label")).toHaveTextContent("Count:");
});
