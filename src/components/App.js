import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    console.log("before state", store.getState());
    store.subscribe(() => {
      console.log("Updated");
      // force render the state
      this.forceUpdate();
    });
    // api call
    // dispatch actions
    this.props.store.dispatch({ type: "ADD_MOVIES", movies: data });
    console.log("state", store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    console.log("render");
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
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies=${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
