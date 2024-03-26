import { api } from "../../config/api";
import {
  CREATE_INGREDIENT_CATEGORY_FAILURE,
  CREATE_INGREDIENT_CATEGORY_REQUEST,
  CREATE_INGREDIENT_CATEGORY_SUCCESS,
  CREATE_INGREDIENT_FAILURE,
  CREATE_INGREDIENT_REQUEST,
  CREATE_INGREDIENT_SUCCESS,
  GET_INGREDIENTS,
  GET_INGREDIENT_CATEGORY_FAILURE,
  GET_INGREDIENT_CATEGORY_REQUEST,
  GET_INGREDIENT_CATEGORY_SUCCESS,
  UPDATE_STOCK,
} from "./ActionType";

export const getIngredientsOfRestaurant =
  ({ id, jwt }) =>
  async (dispatch) => {
    try {
      const { data } = await api.get(
        `/api/admin/ingredients/restaurant/${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: GET_INGREDIENTS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
    }
  };

export const createIngredient =
  ({ data, jwt }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_INGREDIENT_REQUEST });
    try {
      const res = await api.post(`/api/admin/ingredients/create/item`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: res.data });
      console.log("create Ingredient data ", res.data);
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: CREATE_INGREDIENT_FAILURE, payload: error });
    }
  };

export const createIngredientCategory =
  ({ data, jwt }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_INGREDIENT_CATEGORY_REQUEST });
    try {
      const res = await api.post(
        `/api/admin/ingredients/create/category`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("created Ingre Cate ", res.data);
      dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error });
    }
  };

export const getIngredientCategory =
  ({ id, jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_INGREDIENT_CATEGORY_REQUEST });
    try {
      const res = await api.get(
        `/api/admin/ingredients/restaurant/${id}/category`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: res.data });
      console.log("Ingredient category data", res.data);
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: GET_INGREDIENT_CATEGORY_FAILURE, payload: error });
    }
  };

export const updateStockOfIngredient =
  ({ id, jwt }) =>
  async (dispatch) => {
    try {
      const { data } = await api.put(
        `/api/admin/ingredients/updateStoke/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({ type: UPDATE_STOCK, payload: data });
    } catch (error) {
      console.log("catch error ", error);
    }
  };
