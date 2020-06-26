import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function App() {
  return (
    <div className="App">
      <h1></h1>
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorite</div>
        </div>

        <div className="list">
          {/* usually forgot to put return  */}
          {data.map((movie, index) => (
            <MovieCard movie={movie} key={`movies=${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
