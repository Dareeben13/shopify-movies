import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'

import thunk from 'redux-thunk'

import RootReducer from './reducers/rootReducer'

const middleWares = [thunk]

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middleWares)))

export const persistor = persistStore(store)


export type RootStore = ReturnType<typeof RootReducer>


