import React from "react";
export const Header = ({ navigateTo }) => {
  return (
    <>
      <header className="App-header">
        <div className="logo">
          <img src="./img/лого1.gif" alt="logo" />
        </div>
        <nav>
          <ul className="App-list">
            <li>
              <button
                onClick={() => {
                  navigateTo("Map");
                }}
              >
                Карта
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigateTo("Profile");
                }}
              >
                Профиль
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigateTo("Login");
                }}
              >
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
