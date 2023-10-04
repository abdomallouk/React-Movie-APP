import React from 'react'

const MovieDetails = ({title, singleMovie}) => {
  return (
    <div>
       <h1 className='movieDetailheading'>This is the movie deatils </h1> 
       <h2>{title}</h2> 
       <h2>{singleMovie.Title}</h2> 
    </div>
  )
}

export default MovieDetails
