import { render } from "@testing-library/react";
import App from "../components/App";

const response = { data: { id: 1, name: "tania" } };
jest.mock("../services/DataService", () => () => Promise.resolve(response));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test("App should render div element className: App", async () => {
    expect(App().props.className).toEqual("App");
  });

  test("App number of props should be: 3", async () => {
    expect(App().props.children.length).toEqual(3);
  });
});


// TODO: Your test need to be here instead of fake tests