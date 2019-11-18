import initialState from "./initialState";
import { FETCH_FOODLIST } from "../actions/actionTypes";

export default function foodList(state=initialState,action){
    switch(action.type){
        case FETCH_FOODLIST:            
            return {
                ...state,
                apiFoodList: action.payload
            }
        
        default:
            return state;
    }
}