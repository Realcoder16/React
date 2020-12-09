import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import auth from "./reducers/auth";

jest.mock("./Login", () => () => <div>Login content</div>);
jest.mock("./Map", () => () => <div>Map content</div>);
jest.mock("./Profile", () => () => <div>Profile content</div>);
jest.mock("./Registration", () => () => <div>Registration content</div>);

describe("App", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({
        auth: { isLoggedIn: true },
      }),

      subscribe: () => {},
      dispatch: () => {},
    };

    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch("Login content");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const history = createMemoryHistory();
      const mockStore = {
        getState: () => ({
          auth: { isLoggedIn: true },
        }),

        subscribe: () => {},
        dispatch: () => {},
      };
      const { getByText, container } = render(
        <Router history={history}>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </Router>
      );
      fireEvent.click(getByText("Карта"));
      expect(container.innerHTML).toMatch("Map content");
      fireEvent.click(getByText("Профиль"));
      expect(container.innerHTML).toMatch("Profile content");
    });
  });
});
