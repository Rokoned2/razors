import products from "../../apis/products";
import { FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_FEAT_PRODUCTS } from "./types";

export const fetchProducts = () => async (dispatch) => {
  const response = await products.get("/products");
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchFeatProducts = () => async (dispatch) => {
  const response = await products.get("/products");
  dispatch({ type: FETCH_FEAT_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await products.get(`/products/${id}`);
  dispatch({ type: FETCH_PRODUCT, payload: response.data });
};
