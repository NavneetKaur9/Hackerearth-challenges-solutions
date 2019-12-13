import initialState from './initialState';
import {FETCH_FOODLIST} from '../actions/actionTypes';
import {handleActions} from 'redux-actions';

const reducer = {
  [FETCH_FOODLIST]: (state, action) => {
    return {
      ...state,
      apiFoodList: action.payload,
    };
  },
};

export default handleActions(reducer, initialState);
