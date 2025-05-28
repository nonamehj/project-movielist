import "./SearchFormStyle.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./../../context";
import NoSearchResult from "../messages/NoSearchResult";
const SearchForm = () => {
  const { setUrl, setSearchQuery, searchQuery, setIndex, movies } =
    useGlobalContext();
  const searchRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let searchStr = searchRef.current.value.trim();
    if (!searchStr) {
      if (movies.length < 1) {
        return <NoSearchResult />;
      }
      searchRef.current.value = "";
      searchRef.current.focus();
    } else {
      setIndex(1);
      setUrl(`/search/movie?query=${searchQuery}&page=`);
      navigate("/search");
      searchRef.current.value = "";
    }
  };
  const searchChange = () => {
    setSearchQuery(searchRef.current.value);
  };
  return (
    <section className="section-search">
      <form action="" className="search-form">
        <div className="form-control">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            ref={searchRef}
            onChange={searchChange}
            placeholder="search your favorite movie"
          />
          <button className="search-btn" onClick={handleSubmit}>
            <i className="fa-solid fa-magnifying-glass icon"></i>
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
