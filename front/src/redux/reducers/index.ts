import loading from './loadingReducer';
import login from './loginReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({loading, login});

export default rootReducer;