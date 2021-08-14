import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/*
 * Reducers
 */

import { searchReducer } from './reducers/search.reducers';

/*
 * Root Reducers
 */
const rootReducer = combineReducers({
    searchReducer
});

/*
 *  Store
 */

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;