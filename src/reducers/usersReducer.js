import initialState from "./initialState";
import { FETCH_USERS, SET_USER_DETAIL } from "../actions/actionTypes";

export default function usersReducer(state=initialState,action){

    switch(action.type){

        case FETCH_USERS:
            
            return {
                ...state,
                apiUserData: action.payload
            }
        
        case SET_USER_DETAIL:

            return {
                ...state,
                userDetail: action.payload
            }

        default:
            return state;
    }
}