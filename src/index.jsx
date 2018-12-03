// @flow

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.scss";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./store/reducers";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const store = createStore(
  reducers,
  applyMiddleware(
    thunk.withExtraArgument({
      API_PATH: "https://api.haipit.news/api/v2/"
    })
  )
);

const node = document.getElementById("root");

if (node) {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path={["/page/:id", "/"]} component={App} />
        </div>
      </Router>
    </Provider>,
    node
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
