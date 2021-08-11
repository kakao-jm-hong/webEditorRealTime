import loading from './loadingReducer';
import login from './loginReducer';
import my from './myReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({loading, login, my});

export default rootReducer;