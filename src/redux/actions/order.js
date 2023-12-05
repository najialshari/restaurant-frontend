import API_URLS from "../../api";
import { requestApi } from "../../helper";

export const orderAction = (orderData) => async (dispatch) => {
  let data = {
    url: API_URLS().ORDERS.ADD_ORDERS,
    method: "POST",
    body: {
      ...orderData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: "ADD_ORDER", payload: res.data });
    })
    .catch((e) => {
      console.error(e);
      dispatch({ type: "CLEAN_ORDER" });
    });
};

export const orderClean = () => {
  return ({ type: "CLEAN_ORDER" });
};
