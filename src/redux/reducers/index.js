import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import featProductsReducer from "./featProductsReducer";

export default combineReducers({
  products: productReducer,
  feat_products: featProductsReducer,
  cart: cartReducer,
});
