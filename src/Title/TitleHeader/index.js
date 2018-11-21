import React, { Component } from "react";
import "./styles.css";

class TitleHeader extends Component {
  render() {
    return (
      <div>
        <h2 className="song-title">Bob Marley - I Wanna Love You</h2>
        <h3 className="song-duration">Duration: 48 seconds</h3>
      </div>
    );
  }
}

export default TitleHeader;
