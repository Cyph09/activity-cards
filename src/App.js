import React, { Component } from "react";
import "./App.css";
import ProfileCard from "./ProfileCard/ProfileCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Activity Board</h2>
        <div className="wrapper">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    );
  }
}

export default App;
