import React, { Component } from "react";
import "./styles.css";

import YouTube from "react-youtube";

class VideoItem extends Component {
  render() {
    const { videoId } = this.props;
    const options = { playerVars: { autoplay: 0, controls: 0 } };
    return (
      <div>
        <YouTube
          videoId={videoId} // defaults -> null
          // id={string}                       // defaults -> null
          // className={string}                // defaults -> null
          // containerClassName={string}       // defaults -> ''
          opts={options} // defaults -> {}
          // onReady={func}                    // defaults -> noop
          // onPlay={func}                     // defaults -> noop
          // onPause={func}                    // defaults -> noop
          // onEnd={func}                      // defaults -> noop
          // onError={func}                    // defaults -> noop
          // onStateChange={func}              // defaults -> noop
          // onPlaybackRateChange={func}       // defaults -> noop
          // onPlaybackQualityChange={func}    // defaults -> noop
        />
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
      </div>
    );
  }
}

export default VideoItem;
