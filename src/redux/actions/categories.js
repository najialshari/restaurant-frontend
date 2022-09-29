import {
  GET_CATEGORIES
  
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helper";
// import { useNavigate } from "react-router-dom";



export const getCategoriesAction = () => {
return async (dispatch) => {
  let data = {
    url: API_URLS().MENU.GET_MENU_CATEGORIES,
    method: "GET",
  };
  await requestApi(data)
  .then((res) => {
  dispatch({ type: GET_CATEGORIES ,payload: res?.data });
  })
};
};
