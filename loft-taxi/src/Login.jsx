import React from "react";
import { withAuth } from "./AuthContext";

export class Login extends React.Component {
  goTo = (page) => {
    this.props.navigate(page);
  };

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };
  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            You are logged in{" "}
            <button onClick={this.goTo("Profile")}>Go to Profile</button>>
          </p>
        ) : (
          <>
            <form onSubmit={this.authenticate}>
              <h2 className="App-form-title">Войти</h2>
              <div className="App-form-text">
                <div>Новый пользователь?</div>
                <div onClick={this.goTo("Registration")}>Зарегистрируйся</div>
              </div>
              <label htmlFor="email">Имя пользователя*</label>
              <input id="email" type="email" name="email" size="email" />
              <label htmlFor="password">Пароль*</label>
              <input id="password" type="password" name="password" size="28" />
              <button type="submit">Login</button>
            </form>
          </>
        )}
      </>
    );
  }
}
export const LoginWithAuth = withAuth(Login);
