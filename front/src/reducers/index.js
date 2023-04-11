import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";



const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))