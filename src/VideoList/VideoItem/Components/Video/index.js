import React, { Component } from "react";

import YouTube from "react-youtube";

class Video extends Component {
  render() {
    const { videoId } = this.props;
    const options = { playerVars: { autoplay: 0, controls: 0 } };
    return (
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
    );
  }
}

export default Video;
