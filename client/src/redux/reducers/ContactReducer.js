
import { GET_CONTACT, TOGGLE_FALSE, TOGGLE_TRUE } from "../types/ContactTypes";

const initialState = {
    contacts: null ,
    edit:false,
    contact: null
};

const ContactReducer= (state = initialState, {type, payload}) => {



    switch (type) {
        case GET_CONTACT:
            return {...state, contact: payload.contact};
            case TOGGLE_TRUE:
                return {...state, edit:true };
                case TOGGLE_FALSE:
                    return {...state, edit:false };

                    case GET_CONTACT:
                        return {...state, contact : payload.foundcontact};
    
        default:
            return state;

    }

        
};
export default ContactReducer ;
