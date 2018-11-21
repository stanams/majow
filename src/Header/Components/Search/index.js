import React, { Component } from "react";
import "./styles.css";

class Search extends Component {
  render() {
    return (
      <div className="input-container">
        <img
          className="search-icon"
          src="https://uploads.codesandbox.io/uploads/user/a80c8af3-3680-4127-b7d1-3654112a1e9a/wLMD-zoom.png"
        />
        <input type="text" className="input" placeholder="Rechercher..." />
      </div>
    );
  }
}

export default Search;
