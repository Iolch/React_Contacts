import React, {useCallback, useState, useEffect} from 'react';

// Import Redux
import { useSelector } from 'react-redux';

// Import Components
import Contact from '../Contact/Contact';
import ContactDetail from '../ContactDetail/ContactDetail';

// Import Modal
import {
    Modal,
    useModal,
    ModalTransition,
  } from 'react-simple-hook-modal';

const ContactList = (props) => {
    const { isModalOpen, openModal, closeModal } = useModal();

    const contacts = useSelector(state => state.contactsReducer.contacts);
    
    return (
        <div>
            <p class="mt-2 text-gray-500">Contacts</p>

            {contacts.map((contact,index)=>{

                return  <div>
                            <button onClick={openModal}>
                                <Contact firstname={contact.person.first_name} email={contact.person.emails[0]} picture={contact.person.profile_pic}/>
                            </button>
                            <Modal
                            id="modal" 
                            isOpen={isModalOpen}
                            transition={ModalTransition.BOTTOM_UP}
                            >
                                <ContactDetail closeModal={closeModal} person={contact.person} company={contact.company}/>
                            </Modal> 
                        </div>
            })}
        </div>
    );
};

export default ContactList;