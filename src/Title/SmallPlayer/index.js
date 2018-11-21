import React, { Component } from "react";
import "./styles.css";

class SmallPlayer extends Component {
  render() {
    return (
      <div className="small-player-wrapper">
        <div className="arrow">
          <img src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/r6UR-left.png" />
        </div>
        <div className="duration-circle">
          <img src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/KGk5-Group%205.png" />
        </div>
        <div className="arrow">
          <img src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/cBtJ-right.png" />
        </div>
      </div>
    );
  }
}

export default SmallPlayer;
