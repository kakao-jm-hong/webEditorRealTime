import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const configureStore = (initStates: any) => createStore(
    reducers,
    initStates,
    composeWithDevTools(),
);

export default configureStore;