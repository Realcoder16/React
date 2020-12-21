import React from "react";
import AuthContext from "./AuthContext";
import Login from "./Login";
import PropTypes from "prop-types";

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
      <button data-tested = 'test' onClick={unauthenticate}>Log out</button>
    </p>
  );
};

Profile.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
  navigateTo: PropTypes.func,
};

export default Profile;
