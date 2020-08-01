import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers/index.js";

// function logger(obj, next, action)
// currying
// logger(obj)(next)(action)
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       // middleware
//       console.log("ACTION_TYPE = ", action.type);
//       next(action);
//     };
//   };
// };

const logger = ({ dispatch, getState }) => (next) => (action) => {
  // middleware
  console.log("ACTION_TYPE = ", action.type);
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(logger));

console.log(store.getState());
// console.log("Before state", store.getState());
// // dispatch send action to reducer

// console.log("After state", store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
