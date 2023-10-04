import React from 'react'
import SearchIcon from '../img/search.svg'
import '../App.css';



const Search = ({setSearchTerm, searchMovie, searchTerm}) => {
  return (
    <div className="search">
    <input
        placeholder="Search for Your Favorite Movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    
    />
    <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovie(searchTerm)}
    />

</div>
  )
}

export default Search
