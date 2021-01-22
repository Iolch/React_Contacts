import axios from 'axios';

// Import Constants
import Strings from '../constants/Requests';


// Função que puxa as informaçoes da api
export const getData = async () => {
    const response = await axios.get(Strings.apiUrl);
    return response;
};    
