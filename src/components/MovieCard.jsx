import React from "react";
import { Link } from "react-router-dom";


const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type }, showDetails } ) => {
    return (
        <Link to={`/details/${Title}`} className="movie">
            <div>
                <p>{Year}</p>
            </div>

            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />

            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
                <button onClick={() => showDetails(imdbID)}>Show More</button>
            </div>

        </Link>
    )
}



export default MovieCard;  