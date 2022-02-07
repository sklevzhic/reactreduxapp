import {applyMiddleware, combineReducers, createStore} from "redux";
import repositoriesReducer from "./repositoriesReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repositories: repositoriesReducer
})

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))