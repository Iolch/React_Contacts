import React, {useEffect, useCallback} from 'react';

import './App.css';

// Import Redux
import { useDispatch} from 'react-redux';
import { setContacts } from './store/actions/Contacts';

// Import Components
import ContactList from './components/ContactList/ContactList';

// Import Modal
import {
  ModalProvider,
} from 'react-simple-hook-modal';

function App() {
  
  useEffect (() => {
    handleContacts(); 
  });
  
  const dispatch = useDispatch(); 
  const handleContacts = useCallback(async () => {
    try{
      await dispatch(setContacts()); 
    }catch(err){
      console.log(err.message);
    }
  },[dispatch]);

  return (
    <div className="App">
      <ModalProvider>
        <ContactList />  
      </ModalProvider>      
    </div>
  );
}

export default App;
