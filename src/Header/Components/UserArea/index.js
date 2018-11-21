import React, { Component } from "react";
import "./styles.css";

class UserArea extends Component {
  render() {
    return (
      <div className="user-area">
        <div className="notif-wrapper">
          <img
            alt="notif"
            className="notif"
            src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/X5FC-notification%20(1).png"
          />
          <div className="notif-on" />
        </div>
        <div className="pic-group">
          <div className="pic">
            <img
              className="profil-pic"
              src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/JSyi-37253663_10160380549710315_7020916930634579968_n.jpg"
            />
          </div>
          <img
            alt="menu"
            className="carret-down"
            src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/vv5J-caret-down.png"
          />
        </div>
      </div>
    );
  }
}

export default UserArea;
