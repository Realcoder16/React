import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import App from "./App";

jest.mock("./Login", () => ({ Login: () => <div>Login content</div> }));
jest.mock("./Map", () => ({ Map: () => <div>Map content</div> }));
jest.mock("./Profile", () => ({
  Profile: () => <div>Profile content</div>,
}));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Login content");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App isLoggedIn />);
      fireEvent.click(getByTestId("Map"));
      expect(container.innerHTML).toMatch("Map content");
      fireEvent.click(getByText("Профиль"));
      expect(container.innerHTML).toMatch("Profile content");
    });
  });
});