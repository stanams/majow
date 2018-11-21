import React, { Component } from "react";

import Video from "./Components/Video";
import Content from "./Components/Content";

class VideoItem extends Component {
  render() {
    const { videoId } = this.props;
    return (
      <div>
        <Video videoId={videoId} />
        <Content />
      </div>
    );
  }
}

export default VideoItem;
