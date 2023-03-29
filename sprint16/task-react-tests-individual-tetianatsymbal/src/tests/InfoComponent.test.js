import React from "react";
import { render, waitFor } from "@testing-library/react";
import Info from "../components/Info";
import getGitHubUser from "../services/DataService";

jest.mock("../services/DataService");

describe("Info component", () => {
  it("renders GitHub user info", async () => {
    const mockResponse = {
      data: {
        name: "Jojo",
        bio: "Software engineer",
        followers: 22,
      },
    };

    getGitHubUser.mockResolvedValueOnce(mockResponse);

    const { getByText } = render(<Info user="jojo" />);

    await waitFor(() => expect(getGitHubUser).toHaveBeenCalledWith("jojo"));

    expect(getByText("GitHub User Info")).toBeInTheDocument();
    expect(getByText("name: Jojo")).toBeInTheDocument();
    expect(getByText("bio: Software engineer")).toBeInTheDocument();
    expect(getByText("followers: 22")).toBeInTheDocument();
  });

  it("handles request error", async () => {
    const errorMessage = "request error";

    getGitHubUser.mockRejectedValueOnce({ message: errorMessage });

    const { getByText } = render(<Info user="jojo" />);

    await waitFor(() => expect(getGitHubUser).toHaveBeenCalledWith("jojo"));

    expect(getByText("GitHub User Info")).toBeInTheDocument();
    expect(getByText(`error: ${errorMessage}`)).toBeInTheDocument();
  });
});

// TODO: Your test need to be here instead of fake tests
