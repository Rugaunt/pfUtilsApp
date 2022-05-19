import "./App.css";

// import CreatorWidget from './components/creatorWidget';
// import ItemDisplayBox from './components/itemDisplayBox';
// import ItemDisplayBoxTest from './components/itemDisplayBoxTest';
//import Navbar from './components/navBar/navBar';

import React, { Component } from "react";
import NavBar from "./components/navBar/navBar";
import ItemDisplayBox from "./components/itemDisplayBox";
import Clock from "./components/clock";

class App extends Component {
  state = {
    activeCreator: "Wondrous Item",
    button1: "Wondrous Item",
    button2: "Weapon",
    button3: "Armor",
  };
  render() {
    return (
      <div>
        <h1>{this.state.activeCreator}</h1>
        <NavBar
          activeCreator={this.state.activeCreator}
          button1={this.state.button1}
          button2={this.state.button2}
          button3={this.state.button3}
          onSelect={this.handleNewCreator}
        />
        <Clock />
        <ItemDisplayBox />
      </div>
    );
  }

  handleNewCreator(creatorName) {
    this.setState({ activeCreator: creatorName });
  }
}

export default App;
