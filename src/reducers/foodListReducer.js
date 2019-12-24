import initialState from './initialState';
import { FETCH_FOODLIST, UPDATE_TOTAL_PRICE } from '../actions/actionTypes';
import { handleActions } from 'redux-actions';

const reducer = {
  [FETCH_FOODLIST]: (state, action) => {
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
