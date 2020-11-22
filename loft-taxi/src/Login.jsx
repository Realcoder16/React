import React from "react";

export const Login = ({ navigateTo }) => {
  return (
    <>
      <form>
        <h2 className="App-form-title">Войти</h2>
        <div className="App-form-text">
          <div>Новый пользователь?</div>
          <div
            onClick={() => {
              navigateTo("Registration");
            }}
          >
            Зарегистрируйся
          </div>
        </div>
        <label htmlFor="email">Имя пользователя*</label>
        <input id="email" type="email" name="email" size="email" />
        <label htmlFor="password">Пароль*</label>
        <input id="password" type="password" name="password" size="28" />
        <label htmlFor="submit"></label>
        <input
          type="submit"
          value="Войти"
          form="data"
          onClick={() => {
            navigateTo("Map");
          }}
        />
      </form>
    </>
  );
};
