import {Dispatch} from "redux";
import axios from 'axios'

import {MoviesDispatchTypes , MOVIES_LOADING , MOVIES_SUCCESS , MOVIES_FAILURE, NOMINATE_MOVIE, Movie , REMOVE_MOVIE, DISABLE_BUTTON} from './MoviesActionTypes'

export const getMovies = (movie : string) => async (dispatch : Dispatch<MoviesDispatchTypes>) => {
   
    try {
        dispatch({
            type : MOVIES_LOADING
        })

        const res = await axios.get(`http://www.omdbapi.com/?apikey=c04555df&s=${movie}`)

        dispatch({
            type: MOVIES_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: MOVIES_FAILURE,
        })
    }
}

export const nominateMovie = (movie : Movie) => ({
    type: NOMINATE_MOVIE,
    payload: movie
})
export const removeMovie = (movie : Movie) => ({
    type: REMOVE_MOVIE,
    payload: movie
})

export const disableButton = (item : string) => ({
    type: DISABLE_BUTTON,
    payload: item
})
