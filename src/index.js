import React from "react";
import ReactDOM from "react-dom";

import Title from "./Title";
import VideoList from "./VideoList";
import Player from "./Player";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Title />
        <VideoList />
        <Player />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
