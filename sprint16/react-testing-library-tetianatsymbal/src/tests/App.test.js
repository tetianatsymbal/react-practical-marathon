import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";

describe("App component", () => {
  it("displays the ImageCard when the first tab is selected", () => {
    render(<App />);
    const pictureTab = screen.getByText("Picture");
    userEvent.click(pictureTab);
    const image = screen.getByRole("img", { src: "../../images/banner-cat2.png" });
    expect(image).toBeInTheDocument();
  });

  it("displays the Calculations component when the second tab is selected", () => {
    render(<App />);
    const calculationsTab = screen.getByText("Calculations");
    userEvent.click(calculationsTab);
    const calculationsComponent = screen.getByRole("heading", { name: /Result/ });
    expect(calculationsComponent).toBeInTheDocument();
  });

  it("displays the ButtonGroup component when the third tab is selected", () => {
    render(<App />);
    const groupTab = screen.getByText("Group");
    userEvent.click(groupTab);
    const buttonGroup = screen.getByTestId("button-group");
    expect(buttonGroup).toBeInTheDocument();
  });

  it("does not display components when the corresponding tab is not selected", () => {
    render(<App />);
    const image = screen.queryByRole("img", { src: "../../images/banner-cat2.png" });
    const calculationsComponent = screen.queryByRole("heading", { name: /Result/ });
    const buttonGroup = screen.queryByTestId("button-group");
    expect(image).not.toBeInTheDocument();
    expect(calculationsComponent).not.toBeInTheDocument();
    expect(buttonGroup).not.toBeInTheDocument();
  });
});
