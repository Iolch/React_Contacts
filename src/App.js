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
      
    </div>
  );
}

export default App;
