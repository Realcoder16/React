import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import PropTypes from "prop-types";

const Login = (props) => {
  const { navigateTo } = props;
  const { isLoggedIn, logIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  const authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    logIn(email.value, password.value);
  };

  return (
    <>
      {isLoggedIn ? (
        <p>
          You are logged in{" "}
          <button onClick={() => navigateTo("Profile")}>Go to Profile</button>
        </p>
      ) : (
        <>
          <form onSubmit={authenticate}>
            <h2 className="App-form-title">Войти</h2>
            <div className="App-form-text">
              <div>Новый пользователь?</div>
              <div onClick={() => navigateTo("Registration")}>
                Зарегистрируйся
              </div>
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
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigateTo: PropTypes.func,
};

export default Login;
