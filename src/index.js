import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { createStore } from "redux";

const reducer = function (state, action) {
  if (action.type === 'INC') {
    return state + 1;
  }
  return state;

}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('store changed', store.getState());

})

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

store.dispatch({type: 'INC', payload: 1});