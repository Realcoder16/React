import React from "react";

import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const logIn = (email, password) => {
    if (email !== "vaild@email.com" || password !== "correctpassword") {
      return;
    }

    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ logIn, logOut, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;