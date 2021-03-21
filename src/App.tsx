import React, {useState} from 'react';

import { useDispatch} from 'react-redux'

import {getMovies} from './actions/MoviesAction'


import SearchBar from './component/searchBar/search'
import MovieResults from './movieResults/movieResult'
import NominatedMovies from './nominatedMovie/nominatedMovie'

import './App.scss';


function App(){

  const dispatch = useDispatch()


  const [text, setText] = useState("")

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)
  const handleSubmit = () => {
    if(text){
      dispatch(getMovies(text))
    }
  } 
  const checkEnter = (event : React.KeyboardEvent) => {
    if (event.key === "Enter") handleSubmit();
  };

  return (
    <div className="App">
      <div className="container">
         <div className="the-shoppies">
           The Shoppies
          </div>
        <SearchBar handleChange={handleChange} text={text} checkEnter={checkEnter}/>

        <div className="results-container">
           <MovieResults text={text}/>
        </div>

        <div className="results-container">
           <NominatedMovies/>
        </div>
      </div>
    </div>
  );
}

export default App;

