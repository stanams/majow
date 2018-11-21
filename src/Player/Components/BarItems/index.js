import React, { Component } from "react";
import "./styles.css";

class BarItems extends Component {
  render() {
    return (
      <div className="bar-items">
        <div className="duration current-time">0:23</div>
        <div className="players">
          <div className="player player-1">
            <img
              className="colored-players"
              src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/9jNb-Capture%20d%E2%80%99e%CC%81cran%202018-11-21%20a%CC%80%2012.23.32.png"
            />
          </div>
          <div className="player player-3">
            <img
              className="white-players"
              src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/OXZn-Capture%20d%E2%80%99e%CC%81cran%202018-11-21%20a%CC%80%2012.24.48.png"
            />
          </div>
          <div className="player player-4">
            <img
              className="white-players"
              src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/OXZn-Capture%20d%E2%80%99e%CC%81cran%202018-11-21%20a%CC%80%2012.24.48.png"
            />
          </div>
        </div>
        <div className="duration total-time">1:28</div>
      </div>
    );
  }
}

export default BarItems;
