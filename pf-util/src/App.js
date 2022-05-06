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
        <ItemDisplayBox />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}

export default App;
