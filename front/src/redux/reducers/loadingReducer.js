import { SET_LOADING } from "../actions/loadingActions";

const reducer = (state= {}, action) => {
    const {type, payload} = action;
    
    switch(type) {
        case SET_LOADING : {
            return {
                ...state,
                loading: payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;
