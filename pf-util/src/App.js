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
    activeCreatorID: 1,
    activeCreator: "Wondrous Item",
    creatorList: [
      { id: 1, value: "Wondrous Item" },
      { id: 2, value: "Weapon" },
      { id: 3, value: "Armor" },
    ],
    button1: "Wondrous Item",
    button2: "Weapon",
    button3: "Armor",
  };
  render() {
    return (
      <div>
        <h1>{this.state.creatorList}</h1>
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

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };
}

export default App;
