import React, {} from 'react';

import './ContactList.css';

// Import Redux
import { useSelector } from 'react-redux';

// Import Components
import Contact from '../Contact/Contact';

const ContactList = (props) => {
    
    const contacts = useSelector(state => state.contactsReducer.contacts);
    console.log(contacts);
    return (
        <div >
            <Contact />
            {/* {contacts.map((data)=>{
            return <Contact />
            })} */}
        </div>
    );
};

export default ContactList;