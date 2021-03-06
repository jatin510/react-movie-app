import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SET_SHOW_FAVOURITES,
} from "../actions";

// movies state
const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return { ...state, list: action.movies };

    case ADD_TO_FAVOURITES:
      return { ...state, favourites: [action.movie, ...state.favourites] };

    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );

      return {
        ...state,
        favourites: filteredArray,
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };

    default:
      return state;
  }
}

// search state
const initalSearchState = {
  result: {},
};

export function search(state = initalSearchState, action) {
  return state;
}

// root state
const initialRootState = {
  movies: initialMovieState,
  search: initalSearchState,
};

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies,
  search,
});
