import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App";
import movies from "./reducers/index.js";

const store = createStore(movies);

// console.log(store);
// console.log("Before state", store.getState());
// // dispatch send action to reducer
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });

// console.log("After state", store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
