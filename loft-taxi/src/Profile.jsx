import React from "react";
import Login from "./Login";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logOut } from "./action";
import props from "prop-types";

const Profile = ({ navigateTo }) => {
  const unauthenticate = (event) => {
    event.preventDefault();
    props.auth.logOut();
    navigateTo("Login");
  };

  if (!props.auth.isLoggedIn) return <Login />;

  return (
    <p>
      Profile.
      <button data-tested="test" onClick={unauthenticate}>
        Log out
      </button>
    </p>
  );
};

Profile.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
  navigateTo: PropTypes.func,
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }), {
  logOut,
})(Profile);
