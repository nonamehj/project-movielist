import "./MovieStyle.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useCallback } from "react";
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
  const navigate = useNavigate();
  const imageUrl = poster_path
    ? `${IMAGE_BASE_URL}${poster_path}`
    : PLACEHOLDER_IMAGE;
  const handleClick = useCallback(() => {
    navigate(`/${name}/${id}`);
  }, [name, id, navigate]);
  return (
    <article className="movie">
      <div className="movie-center" onClick={handleClick}>
        <img src={imageUrl} alt="img" className="movie-img" />
      </div>
      <div className="movie-info" title={original_title}>
        <h3>{original_title}</h3>
        {/* <div className="footer">
          <p>average {`${vote_average.toFixed(1)}`}</p>
          <p>popularity {Math.floor(popularity)}</p>
        </div> */}
      </div>
      <Link to={`/${name}/${id}`} className="btn btn-details">
        details
      </Link>
    </article>
  );
};

export default Movie;
