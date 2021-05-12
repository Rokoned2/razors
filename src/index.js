import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//FIREBASE
// import {
//   ReactReduxFirebaseProvider,
//   firebaseReducer,
// } from "react-redux-firebase";
// import "firebase/auth";
// import firebase from "./services/firebase";

//REDUX
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./redux/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
