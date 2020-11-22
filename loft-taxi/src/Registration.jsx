import React from "react";

export const Registration = ({ navigateTo }) => {
  return (
    <>
      <form>
        <h2 className="App-registration-title">Регистрация</h2>
        <div className="App-registration-text">
          <div>Уже зарегистрирован</div>
          <div
            onClick={() => {
              navigateTo("Login");
            }}
          >
            Войти
          </div>
        </div>
        <label htmlFor="email">Андрес электронной почты</label>
        <input id="email" type="email" name="email" size="28" />

        <label htmlFor="name">Имя</label>
        <input id="name" type="name" name="name" size="28" />

        <label htmlFor="surname">Фамилия</label>
        <input id="surname" type="surname" name="surname" size="28" />

        <label htmlFor="password">Пароль</label>
        <input id="password" type="password" name="password" size="28" />
        <label htmlFor="submit"></label>
        <input type="submit" value="Зарегистрироваться" form="data" />
      </form>
    </>
  );
};
