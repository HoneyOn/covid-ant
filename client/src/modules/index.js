import { combineReducers } from 'redux';
import search from './search';
import count from './count';
import prediction from './prediction';

const rootReducer = combineReducers({ search, count, prediction });

export default rootReducer;
