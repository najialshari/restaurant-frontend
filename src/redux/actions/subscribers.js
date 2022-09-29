import { SUBSCRIBE,GET_ALL_SUBSCRIBERS,GET_ACTIVE_SUBSCRIBERS, DELETE_SUBSCRIBER, SUBSCRIBED_FAILED } from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helper";

export const subscribeAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().SUBSCRIBERS.SUBSCRIBE,
    method: "POST",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: SUBSCRIBE, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
      dispatch({ type: SUBSCRIBED_FAILED });
    });
};

export const getAllSubscribersAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().SUBSCRIBERS.GET_ALL_SUBSCRIBERS,
    method: "GET",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: GET_ALL_SUBSCRIBERS, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
      dispatch({ type: SUBSCRIBED_FAILED });
    });
};

export const getActiveSubscribersAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().SUBSCRIBERS.GET_ACTIVE_SUBSCRIBERS,
    method: "GET",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: GET_ACTIVE_SUBSCRIBERS, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
      dispatch({ type: SUBSCRIBED_FAILED });
    });
};

export const deleteSubscriberAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().SUBSCRIBERS.DELETE_SUBSCRIBER,
    method: "PATCH",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: DELETE_SUBSCRIBER, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
      dispatch({ type: SUBSCRIBED_FAILED });
    });
};