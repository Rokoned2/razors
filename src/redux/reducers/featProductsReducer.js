import _ from "lodash";
import { FETCH_FEAT_PRODUCTS } from "../actions/types";

const featProductsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_FEAT_PRODUCTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default featProductsReducer;
