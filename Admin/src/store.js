import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import AdminReducer from "./Services/Reducer/AdminReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    AdminReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;




