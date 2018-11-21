import React, { Component } from "react";
import "./styles.css";

class VideoList extends Component {
  render() {
    return (
      <ul className="video-list">
        <li className="video-list__item one">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/77l3vN7QNsw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <div className="video-list__item-body">
            <p className="body-name">Paul M.</p>
            <p className="body-city">Paris, France</p>
          </div>
        </li>
        <li className="video-list__item two">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qrCm4AXOl44"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <div className="video-list__item-body">
            <p className="body-name">Paul M.</p>
            <p className="body-city">Paris, France</p>
          </div>
        </li>
        <li className="video-list__item three">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LRrRRjZlPag"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <div className="video-list__item-body">
            <p className="body-name">Paul M.</p>
            <p className="body-city">Paris, France</p>
          </div>
        </li>
        <li className="video-list__item four">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hkkEXCgpCjI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <div className="video-list__item-body">
            <p className="body-name">Paul M.</p>
            <p className="body-city">Paris, France</p>
          </div>
        </li>
      </ul>
    );
  }
}

export default VideoList;
