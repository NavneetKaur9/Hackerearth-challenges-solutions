import initialState from './initialState';
import { SET_POSTS, RECEIVE_POSTS } from '../actions/actionTypes';

export default function posts(state = initialState.posts, action) {
  let newState;

  switch (action.type) {

    case SET_POSTS:
      console.log('SET_POSTS Action')

      return action;

    case RECEIVE_POSTS:
      newState = action.payload;
      console.log('RECEIVE_POSTS Action')

      return newState;

    default:
      return state;
  }
}