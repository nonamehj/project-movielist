import "./MoviesListStyle.css";
import { useGlobalContext } from "./../context";
import Movie from "./Movie";
import PageNumber from "./PageNumber";
const MoviesList = ({ name }) => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return (
      <section className="section section-loading">
        <div className="loading"></div>
        <h2>loading</h2>
      </section>
    );
  }
  if (movies.length < 1) {
    return (
      <section className="section">
        <h2 className="section-title">
          no movies matched your search criteria
        </h2>
      </section>
    );
  }
  return (
    <section className="section">
      <div className="movies-container">
        {movies.map((movie) => {
          return <Movie key={movie.id} name={name} {...movie} />;
        })}
      </div>
      <PageNumber />
    </section>
  );
};

export default MoviesList;
