import React, {useEffect, useCallback} from 'react';

import logo from './logo.svg';
import './App.css';

// Import Redux
import {useDispatch} from 'react-redux';
import { getContacts } from './store/actions/Contacts';


function App() {

  useEffect (() => {
    handleContacts();
  
  });

  const dispatch = useDispatch(); 
  const handleContacts = useCallback(async () => {
    try{
      await dispatch(getContacts()); 
    }catch(err){
      console.log(err.message);
    }
  },[dispatch]);


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
