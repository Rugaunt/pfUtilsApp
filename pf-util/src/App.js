
import './App.css';
import NavBar from './components/navBar';
import CreatorWidget from './components/creatorWidget';
import ItemDisplayBox from './components/itemDisplayBox';

import React, { Component } from 'react';


class App extends Component {
  state = { 
    titleOfCreator : "Wondrous Item"
  } 
  render() { 
    return (
      <div className="App">
      <React.Fragment>
      <NavBar 
        titleOfCreator={this.state.titleOfCreator}
      />
     
      </React.Fragment>
     
    </div>
     
    
    );
  }
}

 
export default App;