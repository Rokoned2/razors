import products from "../../apis/products";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_FEAT_PRODUCTS,
  ADD_TO_CART_USER,
  DECREASE,
  INCREASE,
  REMOVE,
  CLEAR_CART,
  GET_TOTALS,
  GET_CART_ITEMS,
  TOGGLE_AMOUNT,
} from "./types";

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

// export const getCartItems = (id) => async (dispatch) => {
//   const response = await products.get(`/addToCart?productId=${id}`);
//   dispatch({ type: GET_CART_ITEMS, payload: response.data });
// };

export function getCartItems(cartItems, userCart) {
  const request = products
    .get(`/products/products_by_id?id=${cartItems}&type=array`)
    .then((response) => {
      //Make CartDetail inside Redux Store
      // We need to add quantity data to Product Information that come from Product Collection.

      userCart.forEach((cartItem) => {
        response.data.forEach((productDetail, i) => {
          if (cartItem.id === productDetail._id) {
            response.data[i].quantity = cartItem.quantity;
          }
        });
      });

      return response.data;
    });

  return {
    type: GET_CART_ITEMS,
    payload: request,
  };
}

export const addToCart = (id) => async (dispatch) => {
  const response = await products.get(`/addToCart?productId=${id}`);
  dispatch({ type: ADD_TO_CART_USER, payload: response.data });
};

export const decrease = (id) => async (dispatch) => {
  dispatch({ type: DECREASE, payload: id });
};

export const increase = (id) => async (dispatch) => {
  dispatch({ type: INCREASE, payload: id });
};

export const remove = (id) => async (dispatch) => {
  dispatch({ type: REMOVE, payload: id });
};

export const clearCart = (id) => async (dispatch) => {
  dispatch({ type: CLEAR_CART, payload: id });
};

export const getTotals = (id) => async (dispatch) => {
  dispatch({ type: GET_TOTALS, payload: id });
};

export const toggleAmount = (id) => async (dispatch) => {
  dispatch({ type: TOGGLE_AMOUNT, payload: id });
};
