import React, { Component } from "react";
import "./styles.css";

class Logo extends Component {
  render() {
    return (
      <div className="logo-wrapper">
        <img
          alt="logo"
          className="logo"
          src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/B7vV-logo-w.png"
        />
      </div>
    );
  }
}

export default Logo;
