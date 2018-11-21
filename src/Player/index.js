import React, { Component } from "react";
import DurationBar from "./Components/DurationBar";
import BarItems from "./Components/BarItems";
import "./styles.css";

class Player extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <BarItems />
        <DurationBar />
      </div>
    );
  }
}

export default Player;
