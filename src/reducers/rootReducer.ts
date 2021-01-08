import {combineReducers} from 'redux'
import {movieReducer} from './moviesReducer'


const RootReducer = combineReducers({
   movies : movieReducer
})

export default RootReducer;