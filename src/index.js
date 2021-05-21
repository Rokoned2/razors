import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//FIREBASE
import { FirebaseAppProvider } from "reactfire";
// import {
//   ReactReduxFirebaseProvider,
//   firebaseReducer,
// } from "react-redux-firebase";
import "firebase/auth";
// import firebase from "./services/firebase";

//REDUX
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./redux/reducers";

const firebaseConfig = {
  apiKey: "AIzaSyBhQ7cE27CeOrQSVbLx4-zUATvOCKc6Pc4",
  authDomain: "razors-578fe.firebaseapp.com",
  projectId: "razors-578fe",
  storageBucket: "razors-578fe.appspot.com",
  messagingSenderId: "837135017996",
  appId: "1:837135017996:web:918e18e872bd988b3ae629",
  measurementId: "G-7ZJM5QV3CF",
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </Provider>,
  document.getElementById("root")
);
