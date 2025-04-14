import {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";

const AppContext = createContext();
const API_KEY = process.env.REACT_APP_API_KEY;
const base_url = "https://api.themoviedb.org/3";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [index, setIndex] = useState(1);
  const [url, setUrl] = useState(
    `/discover/movie?sort_by=popularity.desc&page=`
  );

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `${base_url}${url}${index}&api_key=${API_KEY}`
    );
    const data = await response.json();
    if (data) {
      const results = data.results;
      setMovies(results);
    } else {
      setMovies(null);
    }
    setLoading(false);
  }, [url, index]);

  useEffect(() => {
    fetchMovies();
  }, [url, index, fetchMovies]);
  return (
    <AppContext.Provider
      value={{
        setIndex,
        index,
        setUrl,
        loading,
        movies,
        setSearchQuery,
        searchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
