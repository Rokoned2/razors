export const FETCH_PRODUCTS = "FETCH_STREAMS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const FETCH_FEAT_PRODUCTS = "FETCH_FEAT_PRODUCTS";
export const ADD_TO_CART_USER = "ADD_TO_CART_USER";

export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
export const GET_CART_ITEMS = "GET_CART_ITEMS";

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};
