import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import * as rootReducer from "reducers";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = composeEnhancers(
    applyMiddleware(...middleware),
)(createStore)

const config = {
    key: 'root',
    storage,
}

const combinedReducer = persistCombineReducers(config, rootReducer)

const createAppStore = () => {
    let store = configureStore(combinedReducer)
    let persistor = persistStore(store)
    return { persistor, store }
}

export default createAppStore