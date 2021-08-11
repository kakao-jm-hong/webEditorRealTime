import { SET_MY_LAYER } from "../actions/myActions";

const reducer = (state= {}, action) => {
    const {type, payload} = action;
    
    switch(type) {
        case SET_MY_LAYER: {
            return {
                ...state,
                myLayer: payload,
            }
        }
        default:
            return state;
    }
};

export default reducer;
