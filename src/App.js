import React, {useEffect, useCallback} from 'react';

import './App.css';

// Import Redux
import { useDispatch} from 'react-redux';
import { getContacts } from './store/actions/Contacts';

// Import Components
import ContactList from './components/ContactList/ContactList';


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
      <ContactList />        
    </div>
  );
}

export default App;
