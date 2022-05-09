import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import CreatorWidget from './components/creatorWidget';
import ItemDisplayBox from './components/itemDisplayBox';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ItemDisplayBox />Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <CreatorWidget />
      </body>
    </div>
  );
  /*
  changeActiveCreator = () => {
    // when this is called, will modify the creatorWidget to display correct creation method

  };
  */
}

export default App;
