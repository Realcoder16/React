import React from "react";
import Profile from "./Profile";
import { render, fireEvent, screen } from "@testing-library/react";
import AuthProvider from "./AuthProvider";

describe("Profile", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText } = render(
      <AuthProvider>
        <Profile />
      </AuthProvider>
    );
    fireEvent.click(getByTestId("test"));
    expect(isLoggedIn).toBeFalsy();
  });
});
