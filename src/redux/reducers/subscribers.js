import {SUBSCRIBE, GET_ALL_SUBSCRIBERS,GET_ACTIVE_SUBSCRIBERS,DELETE_SUBSCRIBER, SUBSCRIBED_FAILED } from "../constants";

let initialState = {
  success: false,
  data: [],
  message: "",
};

const subscribersReducer = (state = initialState, action) => {
  const { success, data, messages } = action?.payload || {};
  switch (action.type) {
    case SUBSCRIBE:
      return {
        success,
        data,
        messages,
      };
    case GET_ALL_SUBSCRIBERS:
      return {
        success,
        data,
        messages,
      };
    case GET_ACTIVE_SUBSCRIBERS:
      return {
        success,
        data,
        messages,
      };
    case DELETE_SUBSCRIBER:
      return {
        success,
        data,
        messages,
      };
    case SUBSCRIBED_FAILED:
      return {
        success: false,
        data,
        messages,
      };
    default:
      return state;
  }
};

export default subscribersReducer;
