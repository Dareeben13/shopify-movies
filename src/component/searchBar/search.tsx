import React from 'react'

import './search.scss'

interface SearchProps {
  handleChange: any;
  text: string
  checkEnter: any
}

const SearchBar = (props : SearchProps) => {

  return(
      <div className="search-bar">
          <p className="movie-title">
              Movie Title
          </p>
          <span className="search-icon">&#128269;</span>
          <input type="text" placeholder="search for movies" value={props.text} onChange={props.handleChange} onKeyDown={props.checkEnter}/>
      </div> 
  )
}

export default SearchBar;