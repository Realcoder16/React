import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="/map">Карта</Link>
            </li>
            <li>
              <Link to="/profile">Профиль</Link>
            </li>
            <li>
              <Link to="/">Выйти</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
