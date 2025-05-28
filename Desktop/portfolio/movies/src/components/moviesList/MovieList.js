import "./MovieListStyle.css";
import { useGlobalContext } from "./../../context";
import Movie from "./Movie";
import Pagination from "./../pagination/Pagination";
import NoSearchResult from "../messages/NoSearchResult";
import Loading from "./../loading/Loading";
const MoviesList = ({ name }) => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (movies.length < 1) {
    return <NoSearchResult />;
  }
  return (
    <section className="section section-movie-list">
      <div className="movie-list-container">
        <div className="movie-list-wrapper">
          {movies.map((movie) => {
            return <Movie key={movie.id} name={name} {...movie} />;
          })}
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default MoviesList;
