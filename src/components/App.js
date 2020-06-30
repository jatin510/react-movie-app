import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store, favourites, showFavourites } = this.props;
    console.log("before state", store.getState());
    store.subscribe(() => {
      console.log("Updated");
      // force render the state
      console.log(store.getState());
      this.forceUpdate();
    });
    // api call
    // dispatch actions
    store.dispatch(addMovies(data));

    console.log("state", store.getState());
  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);

    // fav
    if (index !== -1) return true;

    // not
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {
    const { list, favourites, showFavourites } = this.props.store.getState();

    const displayMovies = showFavourites ? favourites : list;
    console.log("render");
    return (
      <div className="App">
        <h1></h1>
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs " : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favorite
            </div>
          </div>

          <div className="list">
            {/* usually forgot to put return  */}
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies=${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>

          {displayMovies.length === 0 ? (
            <div className="no-movies">No movies found</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
