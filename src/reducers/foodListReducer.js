import initialState from './initialState';
import { SET_FOODLIST, UPDATE_TOTAL_PRICE } from '../actions/actionTypes';
import { handleActions } from 'redux-actions';

const reducer = {
  [SET_FOODLIST]: (state, action) => {
    return {
      ...state,
      apiFoodList: action.payload,
    };
  },
  [UPDATE_TOTAL_PRICE]: (state, action) => {
    return {
      ...state,
      totalPrice: action.payload
    }
  }
};

export default handleActions(reducer, initialState);
