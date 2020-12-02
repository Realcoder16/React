import React from "react";
import AuthContext from "./AuthContext";
import Login from "./Login";

const Profile = ({ navigateTo }) => {
  const { isLoggedIn, logOut } = React.useContext(AuthContext);
  const unauthenticate = (event) => {
    event.preventDefault();
    logOut();
    navigateTo("Login");
  };

  if (!isLoggedIn) return <Login />;

  return (
    <p>
      Profile.
      <button onClick={unauthenticate}>Log out</button>
    </p>
  );
};

export default Profile;
