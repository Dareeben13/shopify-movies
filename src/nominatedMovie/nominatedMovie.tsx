import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {RootStore} from '../store'

import {removeMovie} from '../actions/MoviesAction'

import './nominatedMovie.scss'

const NominatedMovies = () => {

    const dispatch = useDispatch()

     const nominatedMovie = useSelector((state : RootStore) => state.movies.nominatedMovies)


    return(
        <div className="nominated-movies">
          <p className="nom">
             Nominations
          </p>
          {
              nominatedMovie && (
                  <ul>
                      {
                          nominatedMovie.map((movie, idx) => (
                              <li key={idx} style={{ marginBottom: 10}}>
                                  {movie.Title} ({movie.Year})
                                   <button className="remove"
                                    onClick={() => {
                                        dispatch(removeMovie(movie))
                                    }}
                                    >Remove</button>
                              </li>
                          ))
                      }
                  </ul>
              )
          }
        </div>
    )
}

export default NominatedMovies;