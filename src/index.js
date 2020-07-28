import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers/index.js";

const store = createStore(rootReducer);

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
