import React, {useState, useEffect} from 'react';

import './ContactDetail.css';

const ContactDetail = (props) => {
    
    return (
        <div >
            <button onClick={props.closeModal}> sair</button>
        </div>
    );
};

export default ContactDetail;