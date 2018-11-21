import React, { Component } from "react";
import "./styles.css";

import UserArea from "./Components/UserArea";
import Search from "./Components/Search";
import Logo from "./Components/Logo";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Logo />
        <Search />
        <UserArea />
      </div>
    );
  }
}

export default Header;
