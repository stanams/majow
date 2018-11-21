import React from "react";
import ReactDOM from "react-dom";

import Title from "./Title";
import VideoList from "./VideoList";
import Player from "./Player";
import Header from "./Header";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
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
