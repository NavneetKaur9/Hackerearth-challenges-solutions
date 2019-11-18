import {combineReducers} from 'redux';
import foodList from './foodListReducer';

const rootReducer = combineReducers({ foodList });

export default rootReducer;
