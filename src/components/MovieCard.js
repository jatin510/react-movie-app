import React, { Component } from "react";

// class MovieCard extends Component {
//   render() {
//     return (
//       <div className="nav">
//         <div className="search-container">
//           <input />
//           <button id="search-btn">Search</button>
//         </div>
//       </div>
//     );
//   }
// }

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster}></img>
        </div>

        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            <button className="favourite-btn">Favorite</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
