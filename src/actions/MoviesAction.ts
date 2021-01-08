import {Dispatch} from "redux";
import axios from 'axios'

import {MoviesDispatchTypes , MOVIES_LOADING , MOVIES_SUCCESS , MOVIES_FAILURE} from './MoviesActionTypes'



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
            type: MOVIES_FAILURE
        })
    }
}