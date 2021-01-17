import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {RootStore} from '../store'
import {nominateMovie, disableButton} from '../actions/MoviesAction'

import WithSpinner from '../component/withSpinner/withSpinner'

import './movieResults.scss'

interface MovieResultsProps {
    text ?: string
}

const MovieResults = ( props : MovieResultsProps) => {


     const movies = useSelector((state : RootStore) => state.movies.movies)
     const loading = useSelector((state : RootStore) => state.movies.loading)
     const disabledButton = useSelector((state : RootStore) => state.movies.disabledButton)

     const dispatch = useDispatch()

    return(
        <div className="movie-results">
          <p className="hhp">
            Results for '{props.text}'
          </p>
            {
              loading ? (
                  <WithSpinner/>
              ):
            movies?.Search && (
              <ul>
                {
                  movies.Search.filter((item , idx) => idx < 10).map((item , idx) => (
                        <li key={idx} style={{ marginBottom: 10}}>
                         {item.Title} ({item.Year})
                         <button className="nominate"
                         disabled = { disabledButton?.indexOf(item.Title) !== -1}
                          onClick={() => {
                              dispatch(nominateMovie(item))
                              dispatch(disableButton(item.Title))

                            }}
                         >Nominate</button>
                        </li>
                  ))
                }
              </ul>
             )
           }
        </div>
    )
}

export default (MovieResults);