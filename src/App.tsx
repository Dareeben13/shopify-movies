import React, {useState} from 'react';

import {useSelector, useDispatch} from 'react-redux'
import {RootStore} from './store'

import {getMovies} from './actions/MoviesAction'

import './App.css';


function App(){
  const dispatch = useDispatch()
  const movies = useSelector((state : RootStore) => state.movies)

  const [text, setText] = useState("")

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)
  const handleSubmit = () => dispatch(getMovies(text))

  console.log((movies.movies?.Search))


  return (
    <div className="App">
      <div>
        <input type="search" placeholder="Serach for Shopify Movies" value={text} onChange={handleChange}/>

        <button  onClick={handleSubmit} >Click here</button>
        <div>
          {
            movies.movies && (
              <div>
                {
                  movies.movies.Search.filter((item , idx) => idx < 8).map((item , idx) => (
                    <h2 key={idx}>{item.Title} ({item.Year})</h2>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
