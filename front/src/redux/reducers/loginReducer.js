import { SET_LOGIN_MODAL, SET_USER } from "../actions/loginActions";

const reducer = (state= {}, action) => {
    const {type, payload} = action;
    
    switch(type) {
        case SET_LOGIN_MODAL : {
            return {
                ...state,
                modal: payload,
            };
        }
        case SET_USER : {
            return {
                ...state,
                user: payload,
            };
        }
        
        default:
            return state;
    }
};

export default reducer;
