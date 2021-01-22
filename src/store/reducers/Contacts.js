import { GET_CONTACTS } from '../actions/Contacts';
import Contact from '../../models/Contact';
const initialState = {
    contact: Contact,
};
const companyReducer = (state = initialState, action) => {

    switch(action.type){
        case GET_CONTACTS:
            return {...state, contact: action.contact}
        default:
            return state;
    }
    return state;
}

export default companyReducer;