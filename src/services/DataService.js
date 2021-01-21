import axios from 'axios';

// Import Constants
import Strings from '../constants/Requests';

export const getData = async () => {
    const response = await axios.get(Strings.apiUrl);
    return response;
};    
