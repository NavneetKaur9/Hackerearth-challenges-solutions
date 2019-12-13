import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

export default function configureStore() {
    const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

    return applyMiddleware(thunk)(create)(rootReducer)
}
