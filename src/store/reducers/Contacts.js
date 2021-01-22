import { SET_CONTACTS } from '../actions/Contacts';
import Contact from '../../models/Contact';
const initialState = {
    contacts: [],
};
const contactsReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_CONTACTS:
            return {...state, contacts: action.contacts}
        default:
            return state;
    }
    return state;
}

export default contactsReducer;