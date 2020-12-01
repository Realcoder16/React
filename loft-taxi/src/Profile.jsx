import React from "react";
import AuthContext from "./AuthContext";

export class Profile extends React.Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.props.navigateTo("Login");
  };

  render() {
    return (
      <p>
        Profile.
        <button onClick={this.unauthenticate}>Log out</button>
      </p>
    );
  }
}
