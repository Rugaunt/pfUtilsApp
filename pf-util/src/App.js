
import './App.css';
import NavBar from './components/navBar';
import CreatorWidget from './components/creatorWidget';
import ItemDisplayBox from './components/itemDisplayBox';
import ItemDisplayBoxTest from './components/itemDisplayBoxTest';

import React, { Component } from 'react';


class App extends Component {
  state = { 
    titleOfCreator : "Wondrous Item"
  } 
  render() { 
    return (
      
      <React.Fragment>
      <NavBar 
        titleOfCreator={this.state.titleOfCreator}
      />
      <main className='container'>
        <ItemDisplayBoxTest />
      </main>
      
      </React.Fragment>
     
    
     
    
    );
  }
}

 
export default App;