import React from "react";
import { connect } from "react-redux";
import { registration } from "./action";
import { Link } from "react-router-dom";
import props from "prop-types";

const Registration = ({ logOut, isLoggedIn, dispatch, logIn }) => {
  console.log(props);

  const handleRegistration = (event) => {
    event.preventDefault();
    const { email, password, name, surname } = event.target;
    dispatch(
      registration(email.value, password.value, name.value, surname.value)
    );
  };

  return (
    <>
      {isLoggedIn ? (
        <p>
          Вы зарегистрированы и сразу можете войти на сайт{" "}
          <Link to="/profile">Go to Profile</Link>
        </p>
      ) : (
        <>
          <form onSubmit={handleRegistration}>
            <h2 className="App-registration-title">Регистрация</h2>
            <div className="App-registration-text">
              <div>Уже зарегистрирован</div>
              <Link to="/">Войти </Link>
            </div>
            <label htmlFor="email">Адрес электронной почты</label>
            <input id="email" type="email" name="email" size="28" />

            <label htmlFor="name">Имя</label>
            <input id="name" type="name" name="name" size="28" />

            <label htmlFor="surname">Фамилия</label>
            <input id="surname" type="surname" name="surname" size="28" />

            <label htmlFor="password">Пароль</label>
            <input id="password" type="password" name="password" size="28" />
            <button type="submit">Регистрация</button>
          </form>
        </>
      )}
    </>
  );
};
export default connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  logIn: state.auth.logIn,
  logOut: state.auth.logOut,
}))(Registration);
