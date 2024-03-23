import { api } from "../../config/api";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  CLEAR_CART_FAILURE,
  CLEAR_CART_REQUEST,
  CLEAR_CART_SUCCESS,
  FIND_CART_FAILURE,
  FIND_CART_REQUEST,
  FIND_CART_SUCCESS,
  GET_ALL_CART_ITEMS_FAILURE,
  GET_ALL_CART_ITEMS_REQUEST,
  GET_ALL_CART_ITEMS_SUCCESS,
  REMOVE_CARTITEM_FAILURE,
  REMOVE_CARTITEM_REQUEST,
  REMOVE_CARTITEM_SUCCESS,
  UPDATE_CARTITEM_FAILURE,
  UPDATE_CARTITEM_REQUEST,
  UPDATE_CARTITEM_SUCCESS,
} from "./ActionType";

export const findCart = (token) => async (dispatch) => {
  dispatch({ type: FIND_CART_REQUEST });
  try {
    const { data } = await api.get("/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: FIND_CART_SUCCESS, payload: data });
    console.log("find Cart ", data);
  } catch (error) {
    console.log("catch error ", error);
    dispatch({ type: FIND_CART_FAILURE, payload: error });
  }
};

export const getAllCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });
  try {
    const { data } = await api.get(`/api/carts/${reqData.cardId}/items`, {
      headers: {
        Authorization: `Bearer ${reqData.token}`,
      },
    });
    dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error ", error);
    dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error });
  }
};

export const addItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  try {
    const { data } = await api.put(`/api/cart/add`, reqData.cartItem, {
      headers: {
        Authorization: `Bearer ${reqData.token}`,
      },
    });
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
    console.log("Add item to cart ", data);
  } catch (error) {
    console.log("catch error ", error);
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
  }
};

export const updateCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_CARTITEM_REQUEST });
  try {
    const { data } = await api.put(`/api/cart-item/update`, reqData.data, {
      headers: {
        Authorization: `Bearer ${reqData.jwt}`,
      },
    });
    console.log("updated cardItem ", data);
    dispatch({ type: UPDATE_CARTITEM_SUCCESS, payload: data });
  } catch (error) {
    console.log("catch error ", error);
    dispatch({ type: UPDATE_CARTITEM_FAILURE, payload: error.message });
  }
};

export const removeCartItem =
  ({ cartItemId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: REMOVE_CARTITEM_REQUEST });
    try {
      const { data } = await api.delete(`/api/cart-item/${cartItemId}/remove`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("remove cardItem ", data);
      dispatch({ type: REMOVE_CARTITEM_SUCCESS, payload: cartItemId });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: REMOVE_CARTITEM_FAILURE, payload: error.message });
    }
  };

export const clearCartAction = () => async (dispatch) => {
  dispatch({ type: CLEAR_CART_REQUEST });
  try {
    const { data } = await api.put(
      `/api/cart/clear`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    );
    dispatch({ type: CLEAR_CART_SUCCESS, payload: data });
    console.log("clear cart ", data);
  } catch (error) {
    console.log("catch error ", error);
    dispatch({ type: CLEAR_CART_FAILURE, payload: error.message });
  }
};
