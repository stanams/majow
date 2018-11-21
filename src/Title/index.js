import React, { Component } from "react";
import "./styles.css";
import TitleHeader from "./TitleHeader";
import SmallPlayer from "./SmallPlayer";

class Title extends Component {
  render() {
    return (
      <div className="title-container">
        <TitleHeader />
        <SmallPlayer />
      </div>
    );
  }
}

export default Title;
