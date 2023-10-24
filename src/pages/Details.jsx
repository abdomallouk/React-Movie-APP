import React from 'react'
import { useParams } from 'react-router'
import MovieDetails from '../components/MovieDetails'
import { useState, useEffect } from 'react'


const API_URL = "http://www.omdbapi.com?apikey=a6370745"



const Details = () => {

    const [singleMovie, setSingleMovie] = useState({})
    const {title} = useParams()
    // console.log(title)

    useEffect(() => {

        const fetchMovie = async () => {
            try {
                const response = await fetch(`${API_URL}&t=${title}`);
                if (response.ok) {
                    const movieData = await response.json();
                    console.log(movieData)
                    setSingleMovie(movieData);
                } else {
                    console.error(`Error fetching movie data for "${title}"`);
                }
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchMovie();    

    },[title] )


    
  return (
    <div>
      <MovieDetails singleMovie={singleMovie} />
    </div>
  )
}

export default Details
