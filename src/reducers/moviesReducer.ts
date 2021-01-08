import {MoviesType, MoviesDispatchTypes, MOVIES_FAILURE , MOVIES_LOADING , MOVIES_SUCCESS} from '../actions/MoviesActionTypes'

interface DefaultState{
   loading: boolean,
   movies?: MoviesType
}

const defaultState : DefaultState = {
    loading : false
}

export const movieReducer = (state : DefaultState = defaultState, action : MoviesDispatchTypes) : DefaultState => {

    switch(action.type){
        case MOVIES_FAILURE :
            return{
                loading: false
            }
        case MOVIES_LOADING :
            return{
                loading: true
            }
        case MOVIES_SUCCESS:
            return {
                loading: false,
                movies: action.payload
            }
        default:
            return state
    }
}