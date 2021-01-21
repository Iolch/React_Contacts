import React, {useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

//Import Services
import {getData} from './services/DataService';

function App() {

  useEffect (() => {
    async function getDataaa() {
        
          console.log (await getData());
        
    }
    getDataaa();
  
  });


  return (
    <div className="App">
      <header className="App-header">
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
    </div>
  );
}

export default App;
