import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import RootReducer from './reducers/rootReducer'

const middleWares = [thunk]

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middleWares)))


export type RootStore = ReturnType<typeof RootReducer>