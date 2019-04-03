import React, { Component } from "react";
import "./App.css";
import ProfileCard from "./ProfileCard/ProfileCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Activity Board</h2>
        <ProfileCard />
      </div>
    );
  }
}

export default App;
