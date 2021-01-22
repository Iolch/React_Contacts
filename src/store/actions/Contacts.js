//Import Services
import {getData} from '../../services/DataService';

import Contact from '../../models/Contact';

export const GET_CONTACTS = 'GET_CONTACTS';

export const getContacts = () => {

    return async (dispatch, getState) => {
        try{
            const response = await getData();

            if(!response){
                throw new Error('Problemas com a api.');
            }
            
            let contacts = new Contact({...response.data.person}, {...response.data.company});
            
            dispatch({
                type:GET_CONTACTS, 
                contacts:contacts
            });
        }catch (err){
            console.log(err);
            throw err;
        }
    };
};
