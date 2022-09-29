import {
  GET_CATEGORY_MEALS,
  GET_MENU_CATEGORY_MEALS_BY_ID
  
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helper";
// import { useNavigate } from "react-router-dom";



export const getCategoryMealsAction = () => {
return async (dispatch) => {
  let data = {
    url: API_URLS().MENU.GET_MENU_CATEGORY_MEALS,
    method: "GET",
  };
  await requestApi(data)
  .then((res) => {
  dispatch({ type: GET_CATEGORY_MEALS ,payload: res?.data });
  })
};
};
export const getCategoryMealsByIdAction = () => {
return async (dispatch) => {
  let data = {
    url: API_URLS().MENU.GET_MENU_CATEGORY_MEALS_BY_ID,
    method: "GET",
  };
  await requestApi(data)
  .then((res) => {
  dispatch({ type: GET_MENU_CATEGORY_MEALS_BY_ID ,payload: res?.data });
  })
};
};
