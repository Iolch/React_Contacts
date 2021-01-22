import { GET_CONTACTS } from '../actions/Contacts';
import Contact from '../../models/Contact';
const initialState = {
    contacts: Contact,
};
const contactsReducer = (state = initialState, action) => {

    switch(action.type){
        case GET_CONTACTS:
            console.log(action.contacts);
            return {...state, contact: action.contacts}
        default:
            return state;
    }
    return state;
}

export default contactsReducer;