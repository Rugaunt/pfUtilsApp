import "./App.css";

// import CreatorWidget from './components/creatorWidget';
// import ItemDisplayBox from './components/itemDisplayBox';
// import ItemDisplayBoxTest from './components/itemDisplayBoxTest';
//import Navbar from './components/navBar/navBar';

import React, { Component } from "react";
import NavBar from "./components/navBar/navBar";
import ItemDisplayBox from "./components/itemDisplayBox";

class App extends Component {
  state = {
    titleOfCreator: "Wondrous Item",
  };
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>it is {new Date().toLocaleTimeString()}</h2>
        <NavBar />
        <ItemDisplayBox />
      </div>
    );
  }
}

export default App;
