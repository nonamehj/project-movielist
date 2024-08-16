import "./MovieStyle.css";
import { Link } from "react-router-dom";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const PLACEHOLDER_IMAGE =
  "https://via.placeholder.com/500x750?text=No+Image+Available";
const Movie = ({
  id,
  poster_path,
  original_title,
  popularity,
  vote_average,
  name,
}) => {
  const imgeUrl = poster_path
    ? `${IMAGE_BASE_URL}${poster_path}`
    : PLACEHOLDER_IMAGE;
  return (
    <article className="movie">
      <div className="movie-center">
        <img src={imgeUrl} alt="img" className="movie-img" />
      </div>
      <div className="movie-footer">
        <h3>{original_title}</h3>
        <div className="footer">
          <p>average : {vote_average}</p>
          <p>popularity : {Math.floor(popularity)}</p>
        </div>
        <Link to={`/${name}/${id}`} className="btn btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Movie;
