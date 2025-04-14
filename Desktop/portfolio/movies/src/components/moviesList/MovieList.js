import "./MovieListStyle.css";
import { useGlobalContext } from "./../../context";
import Movie from "./Movie";
import Pagination from "./../pagination/Pagination";
import NoResults from "../error/NoResults";
import Loading from "./../loading/Loading";
const MoviesList = ({ name }) => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (movies.length < 1) {
    return <NoResults />;
  }
  return (
    <section className="section section-movie-list">
      <div className="movie-list-container">
        {movies.map((movie) => {
          return <Movie key={movie.id} name={name} {...movie} />;
        })}
      </div>
      <Pagination />
    </section>
  );
};

export default MoviesList;
