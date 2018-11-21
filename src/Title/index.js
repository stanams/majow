import React, { Component } from "react";
import "./styles.css";

class Title extends Component {
  render() {
    return (
      <div className="title-container">
        <h2 className="song-title">Bob Marley - I Wanna Love You</h2>
        <h3 className="song-duration">Duration: 48 seconds</h3>
        <div className="small-player-wrapper">
          <div className="left-arrow">
            <img src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/r6UR-left.png" />
          </div>
          <div className="duration-circle">
            <img src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/KGk5-Group%205.png" />
          </div>
          <div className="right-arrow">
            <img src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/cBtJ-right.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
