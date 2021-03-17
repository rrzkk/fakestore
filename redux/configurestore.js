import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {carts} from './carts'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({  
            carts
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}