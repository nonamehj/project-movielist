import "./MovieStyle.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import PLACEHOLDER_IMAGE from "../../noImage.webp";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const Movie = ({ id, poster_path, original_title, name }) => {
  const navigate = useNavigate();
  const imageUrl = poster_path
    ? `${IMAGE_BASE_URL}${poster_path}`
    : PLACEHOLDER_IMAGE;
  const handleClick = useCallback(() => {
    navigate(`/${name}/${id}`);
  }, [name, id, navigate]);
  return (
    <article className="movie">
      <div className="movie-image-wrapper" onClick={handleClick}>
        <img src={imageUrl} alt={original_title} className="movie-img" />
      </div>
      <div className="movie-info" title={original_title}>
        <h3>{original_title}</h3>
      </div>
      <Link to={`/${name}/${id}`} className="btn btn-details">
        details
      </Link>
    </article>
  );
};

export default Movie;
