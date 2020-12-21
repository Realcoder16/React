import React from "react";
import props from "prop-types";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { authenticate } from "./action";
import { Link } from "react-router-dom";

const Login = ({ isLoggedIn, dispatch, logIn }) => {
  console.log(props);
  const handleAuthenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    dispatch(authenticate(email.value, password.value));
  };

  return (
    <>
      {isLoggedIn ? (
        <p>
          You are logged in <Link to="/profile">Go to Profile</Link>
        </p>
      ) : (
        <>
          <form onSubmit={handleAuthenticate}>
            <h2 className="App-form-title">Войти</h2>
            <div className="App-form-text">
              <div>Новый пользователь?</div>
              <Link to="/registration">Зарегистрируйся</Link>
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

export default connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  logIn: state.auth.logIn,
}))(Login);
