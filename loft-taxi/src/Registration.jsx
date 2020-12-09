import React from "react";
import { connect } from "react-redux";
import { registration } from "./action";
import { Link } from "react-router-dom";
export const Registration = ({ logOut, isLoggedIn }) => {
  const registration = (event, { registration }) => {
    event.preventDefault();
    const { email, password, name, surname } = event.target;
    registration(email.value, password.value, name.value, surname.value);
  };

  return (
    <>
      <form onSubmit={registration}>
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
        <label htmlFor="submit">Регистрация</label>
        <input type="submit" value="Зарегистрироваться" form="data" />
      </form>
    </>
  );
};

export default connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn, logOut: state.auth.logOut }),
  {
    registration,
  }
)(Registration);
