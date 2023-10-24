import './MovieDetails.css'


const MovieDetails = ({ singleMovie }) => {

  // const { Title, Year, Actors, Genre, Writer, Released } = singleMovie; // Destructure the properties
  const {
    Title,
    Type,
    Director,
    Actors,
    Genre,
    Poster, // Image URL
    Released,
    Awards,
  } = singleMovie

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <h1 className="movie-title">{Title}</h1>
        <div className="movie-info">
          <div className="movie-poster">
            <img src={Poster} alt={Title} />
          </div>
          <div className="movie-description">
            <p><strong>Type:</strong> {Type}</p>
            <p><strong>Director:</strong> {Director}</p>
            <p><strong>Actors:</strong> {Actors}</p>
            <p><strong>Genre:</strong> {Genre}</p>
            <p><strong>Release Date:</strong> {Released}</p>
            <p><strong>Awards:</strong> {Awards}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails
