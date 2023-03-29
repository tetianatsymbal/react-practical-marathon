import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ButtonGroup from "../components/ButtonGroup";

describe("ButtonGroup", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<ButtonGroup />);
    const buttonGroup = getByTestId("button-group");
    expect(buttonGroup).toBeInTheDocument();
  });

  it("aligns text correctly to the left", async () => {
    const { getByTestId, getByText } = render(<ButtonGroup />);
    const leftButton = getByText("left");
    fireEvent.click(leftButton);
    await waitFor(() => {
      const text = getByTestId("text");
      expect(text).toHaveAttribute("align", "left");
    });
  });

  it("aligns text correctly to the center", async () => {
    const { getByTestId, getByText } = render(<ButtonGroup />);
    const centerButton = getByText("center");
    fireEvent.click(centerButton);
    await waitFor(() => {
      const text = getByTestId("text");
      expect(text).toHaveAttribute("align", "center");
    });
  });

  it("aligns text correctly to the right", async () => {
    const { getByTestId, getByText } = render(<ButtonGroup />);
    const rightButton = getByText("right");
    fireEvent.click(rightButton);
    await waitFor(() => {
      const text = getByTestId("text");
      expect(text).toHaveAttribute("align", "right");
    });
  });
});
