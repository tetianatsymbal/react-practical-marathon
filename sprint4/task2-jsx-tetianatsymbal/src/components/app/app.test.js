import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./app.js";

it("Renders App without crashing", () => {
  render(<App />);
  const app = screen.getByTestId("element-app");
  expect(app).toBeInTheDocument();
});
