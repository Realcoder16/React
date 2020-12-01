import React, { useState } from "react";

const AuthContext = React.createContext();

const LogIn = (email, password) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  if (email !== "valid@email.ru" || password !== "correctpassword") {
    return;
  }
  return setIsLoggedIn(true);
};

const LogOut = () => {
  const [isLoggedOut, setIsLoggedOut] = React.useState(true);
  return setIsLoggedOut(false);
};

export default AuthContext;
