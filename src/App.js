import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
// 8342bfe9
const API_URL = "https://www.omdbapi.com?apikey=8342bfe9"




const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Avengers");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(() => data.Search);
  }

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(() => event.target.value)}
          onKeyUp={(event) => { if(event.key === 'Enter')  searchMovies(searchTerm)  }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container">
              {
                // this function is going to return jsx corresponding to each item in array movies
                movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))
              }
            </div>
          )
          : (
            <div className="empty">
              <h2>No movies Found</h2>
            </div>
          )
      }

    <div>
      <h3 className="footer">Built By Rahul Kumar</h3>
    </div>
    </div>
    
  );
}

export default App;
