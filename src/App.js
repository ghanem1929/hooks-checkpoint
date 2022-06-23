import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import Filter from "./components/Filter/Filter";
import Movies from "./components/Movies";
import { useEffect, useState } from "react";

function App() {
  const [searchMovie, setSearchMovie] = useState("");
  const [rating, setRating] = useState();
  const [newMovie, setNewMovie] = useState({});

  useEffect(() => {}, [newMovie]);

  return (
    <div className="App">
      <Filter
        setSearchMovie={setSearchMovie}
        rating={rating}
        setRating={setRating}
        setNewMovie={setNewMovie}
      />
      <div style={{ padding: 35 }}>
        <MovieList
          movies={Movies.filter(
            (el) =>
              el.Title.toLowerCase().includes(
                searchMovie.toLowerCase().trim()
              ) && Math.ceil(el.imdbRating) === rating
          )}
        />
      </div>
    </div>
  );
}

export default App;
