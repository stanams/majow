import React from "react";
import ReactDOM from "react-dom";

import Title from "./Title";
import VideoList from "./VideoList";
import Player from "./Player";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        rel="stylesheet"
      />
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
