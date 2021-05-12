import { combineReducers } from "redux";
import productReducer from "./productReducer";
import featProductsReducer from "./featProductsReducer";
// import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  products: productReducer,
  feat_products: featProductsReducer,
  // firebase: firebaseReducer,
});
