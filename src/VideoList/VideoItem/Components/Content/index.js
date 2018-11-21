import React, { Component } from "react";
import "./styles.css";

import YouTube from "react-youtube";

class Content extends Component {
  render() {
    return (
      <div className="video-list__item-body">
        <div className="item-profile">
          <p className="body-name">Paul M.</p>
          <p className="body-city">Paris, France</p>
        </div>
        <div className="clap-wrapper">
          <img
            className="clap"
            src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/Z-Jm-clapping.png"
          />
          <div className="clap-count">3128</div>
        </div>
      </div>
    );
  }
}

export default Content;
