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
        <NavBar />
        <Clock />
        <ItemDisplayBox />
      </div>
    );
  }

  changeActiveCreator(theCreator) {
    this.setState({ titleOfCreator: theCreator });
  }
}

export default App;
