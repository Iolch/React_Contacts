import React, {useCallback, useState, useEffect} from 'react';

import './ContactList.css';

// Import Redux
import { useSelector } from 'react-redux';

// Import Components
import Contact from '../Contact/Contact';
import ContactDetail from '../ContactDetail/ContactDetail';

// Import Modal
import {
    ModalProvider,
    Modal,
    useModal,
    ModalTransition,
  } from 'react-simple-hook-modal';

// Import Service
import {getData} from '../../services/DataService'

const ContactList = (props) => {
    const { isModalOpen, openModal, closeModal } = useModal();

    const contacts = useSelector(state => state.contactsReducer.contacts);
    console.log(contacts.person);
    return (
        <div >
            <p class="mt-2 text-gray-500">Contacts</p>
            <button onClick={openModal}>
                <Contact firstname={contacts.person.first_name} email={contacts.person.emails[0]}/>
            </button>
                      
            <Modal
                id="any-unique-identifier"
                isOpen={isModalOpen}
                transition={ModalTransition.BOTTOM_UP}
            >
                <ContactDetail closeModal={closeModal} person={contacts.person} company={contacts.company}/>
            </Modal>
        </div>
    );
};

export default ContactList;