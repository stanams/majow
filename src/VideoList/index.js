import React, { Component } from "react";
import "./styles.css";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  render() {
    return (
      <ul className="video-list">
        <li className="video-list__item one">
          <VideoItem videoId="77l3vN7QNsw" />
        </li>
        <li className="video-list__item two">
          <VideoItem videoId="qrCm4AXOl44" />
        </li>
        <li className="video-list__item three">
          <VideoItem videoId="LRrRRjZlPag" />
        </li>
        <li className="video-list__item four">
          <VideoItem videoId="hkkEXCgpCjI" />
        </li>
      </ul>
    );
  }
}

export default VideoList;
