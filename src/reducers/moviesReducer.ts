
import {MoviesType, MoviesDispatchTypes, MOVIES_FAILURE , MOVIES_LOADING , MOVIES_SUCCESS, NOMINATE_MOVIE , REMOVE_MOVIE, DISABLE_BUTTON } from '../actions/MoviesActionTypes'

interface DefaultState{
   loading: boolean,
   movies?: MoviesType,
   nominatedMovies?: any[],
   disabledButton?: any[]
}

const defaultState : DefaultState = {
    loading : false,
    nominatedMovies : [],
    disabledButton: [],
    
}

export const movieReducer = (state : DefaultState = defaultState, action : MoviesDispatchTypes) : DefaultState => {
          
    switch(action.type){
        case MOVIES_FAILURE :
            return{
                ...state,
                loading: false,
            }
        case MOVIES_LOADING :
            return{
                ...state,
                loading: true
            }
        case MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload
            }
        case NOMINATE_MOVIE:
            return{
                ...state,
                nominatedMovies: [ action.payload,  ...state.nominatedMovies || []]
            } 
        case REMOVE_MOVIE:
            return{
                ...state,
                nominatedMovies: state.nominatedMovies?.filter(movie => movie.Title !== action.payload.Title),
                disabledButton: state.disabledButton?.filter(movie =>  movie !== action.payload.Title)
            }
        case DISABLE_BUTTON:
            return{
                ...state,
                disabledButton: [ ...state.disabledButton || [] , action.payload]
            }
        default:
            return state
    }
}