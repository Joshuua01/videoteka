import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";

function App() {
  const API_KEY = "94f45a9";
  const URL_API = "https://www.omdbapi.com/?apikey=" + API_KEY;

  const [movies, setMovies] = useState([]);

  function searchMovie(query) {
    axios.get(URL_API + "&s=" + query).then((res) => {
      setMovies(res.data.Search);
    });
  }

  useEffect(() => {
    searchMovie("Fast");
  }, []);

  return (
    <div className="bg-indigo-700 min-h-screen flex content-center items-center flex-col">
      <h1 className="p-12 text-white tracking-wide font-KronaOne text-5xl [text-shadow:_0_5px_0_rgb(0_0_0_/_80%)]">
        Videoteka
      </h1>
      <input
        type="text"
        className="px-3 py-2 w-6/12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        placeholder="Search..."
        onChange={(e) => {  
          searchMovie(e.target.value);
        }}
      />
      <div className="p-12 flex flex-wrap w-2/3 content-center justify-center">
        {movies?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
