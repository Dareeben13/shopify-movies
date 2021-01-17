import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {movieReducer} from './moviesReducer'

const persistConfig = {
    key: 'root',  // key is just to tell the point inside our reducer object we want to start storing everything.
    storage ,
    whitelist: ['movies']
}


const RootReducer = combineReducers({
   movies : movieReducer
})

export default persistReducer( persistConfig,RootReducer);