import { SET_LOGIN_MODAL } from "../actions/loginActions";

const reducer = (state= {}, action) => {
    const {type, payload} = action;
    
    switch(type) {
        case SET_LOGIN_MODAL : {
            return {
                ...state,
                modal: payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;
