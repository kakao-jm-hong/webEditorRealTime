import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const configureStore = initStates => createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(),
);

export default configureStore;