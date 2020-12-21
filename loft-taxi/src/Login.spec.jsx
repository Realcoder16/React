import React, { useContext } from "react";
import Login from "./Login";
import { render } from "@testing-library/react";
import AuthProvider from "./AuthProvider";

describe("Login", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );

    expect(getByLabelText("Имя пользователя*")).toHaveAttribute(
      "name",
      "email"
    );
    expect(getByLabelText("Пароль*")).toHaveAttribute("name", "password");
  });
});
