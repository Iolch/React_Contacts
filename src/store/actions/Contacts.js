//Import Services
import {getData} from '../../services/DataService';

import Contact from '../../models/Contact';

export const SET_CONTACTS = 'SET_CONTACTS';

export const setContacts = () => {

    return async (dispatch, getState) => {
        try{
            const response = await getData();
            
            if(!response){
                throw new Error('Problemas com a api.');
            }
            
            let contacts = [];
            contacts.push(new Contact({...response.data.person}, {...response.data.company}));
            // let contacts = new Contact({...response.data.person}, {...response.data.company});
            
            dispatch({
                type:SET_CONTACTS, 
                contacts:contacts
            });
        }catch (err){
            console.log(err);
            throw err;
        }
    };
};
