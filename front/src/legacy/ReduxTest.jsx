import React, { useEffect } from "react";
import { Provider, useDispatch} from 'react-redux';
import configureStore from "../redux/configureStore";
import { setLoading } from "../redux/actions/loadingActions";


// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
//     }    
// }

const ReduxTest = ()=> {
    const store = configureStore({ loading: false});

    return (
        <Provider store={store}>
            <Example />
        </Provider>
    );
}

const Example = ()=> {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true))
    },[]);
    return ('리덕스 예제');
}

export default ReduxTest;