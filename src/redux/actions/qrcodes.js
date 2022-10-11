import {
  SCAN_QR,
  TOKEN_REMOVE,
  NOT_FOUND
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helper";
import { Navigate } from "react-router-dom";



export const scanQRAciton = (uuid) => async (dispatch) => {
  let data = {
    url: API_URLS(uuid).QRCODE.SCANE_QR_FOR_TABLES,
    method: "POST",
    body: {
      uuid,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: SCAN_QR, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
      // <Navigate to="/" replace={ true } />;
      dispatch({ type: NOT_FOUND});
    });
};

export const logOutAction = () => async (dispatch) => {
    let data = {
      url: API_URLS().AUTH.LOGOUT,
      method: "POST",
    };
    await requestApi(data).then(() => dispatch({ type: TOKEN_REMOVE }))
    };
