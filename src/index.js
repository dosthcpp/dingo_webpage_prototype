import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
