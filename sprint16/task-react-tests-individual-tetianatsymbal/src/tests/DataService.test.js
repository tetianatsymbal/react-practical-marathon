import axios from "axios";
import getGitHubUser from "../services/DataService";

jest.mock("axios");

describe("getGitHubUser", () => {
  it("returns user data when request succeeds", async () => {
    const mockResponse = {
      data: {
        login: "jojo",
        name: "Jo jo",
        bio: "Software engineer",
        id: 22,
      },
    };

    axios.get.mockResolvedValueOnce(mockResponse);

    const userData = await getGitHubUser("jojo");

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/jojo"
    );
    expect(userData).toEqual(mockResponse);
  });

  // it("throws an error when request fails", async () => {
  //   const errorMessage = "request error";

  //   axios.get.mockRejectedValueOnce({ message: errorMessage });

  //   await expect(() => getGitHubUser("jojo")).rejects.toThrow(errorMessage);
  // });

});
// TODO: Your test need to be here instead of fake tests

