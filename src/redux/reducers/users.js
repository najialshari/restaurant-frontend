import {
  SIGNUP_NEW_USER,
  DELETE_SIGNUP_DATA,
  FETCH_TOKEN,
  FETCH_TOKEN_FAILED,
  TOKEN_REMOVE,
  GET_USERINFO,
  // UPDATE_PASSWORD,
  UPDATE_USERNAME,
  UPDATE_EMAIL,
  UPDATE_PHONENO,
  UPDATE_PROFILEPIC,
  // DELETE_USER
} from "../constants";

let initialState = {
  success: false,
  data: {
    token: window.localStorage.getItem("token") || null,
    user: JSON.parse(window.localStorage.getItem("user")) || null,
  },
  isAuthenticated: false,
};

const usersReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_TOKEN:
      window.localStorage.removeItem("table");
      window.localStorage.setItem("token", action?.payload?.data?.token);
      window.localStorage.setItem(
        "user",
        JSON.stringify(action?.payload?.data?.user)
      );
      return {
        success: action?.payload?.success,
        messages: action?.payload?.messages,
        data: {
          user: action?.payload?.data?.user,
          token: action?.payload?.data?.token,
        },
        isAuthenticated: true,
      };
    case SIGNUP_NEW_USER:
      window.localStorage.removeItem("table");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
      return {
        ...state,
        success: action?.payload?.success,
        messages: action?.payload?.messages,
        isAuthenticated: false,
      };
    case FETCH_TOKEN_FAILED:
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
      return {
        success: false,
        isAuthenticated: false,
        data: {
          user: null,
          token: null,
        },
      };
    case GET_USERINFO:
      window.localStorage.removeItem("table");
      return {
        ...state,
        success: true,
        isAuthenticated: true,
        data: {
          ...state.data,
          user: action?.payload?.data,
        },
      };
    case UPDATE_PROFILEPIC:
      window.localStorage.removeItem("table");
      newState = {
        ...state,
        isAuthenticated: true,
        success: action?.payload?.success || false,
        data: {
          ...state.data,
          user: {
            ...state?.data?.user,
            usersprofile: {
              ...state?.data?.user?.usersprofile,
              profilePic: action?.payload?.data?.urlImage,
            },
          },
        },
      };
      window.localStorage.setItem("user", JSON.stringify(newState?.data?.user));
      return {
        ...newState,
      };

    case UPDATE_USERNAME:
      window.localStorage.removeItem("table");
      newState = {
        ...state,
        isAuthenticated: true,
        data: {
          ...state.data,
          user: {
            ...state?.data?.user,
            username: action?.payload?.data?.username,
          },
        },
      };
      window.localStorage.setItem("user", JSON.stringify(newState?.data?.user));
      console.log("UPDATE_USERNAME", action?.payload);
      return {
        ...newState,
      };
    case UPDATE_PHONENO:
      window.localStorage.removeItem("table");

      newState = {
        ...state,
        isAuthenticated: true,
        data: {
          ...state.data,
          user: {
            ...state?.data?.user,
            phoneNo: action?.payload?.data?.phoneNo,
          },
        },
      };
      window.localStorage.setItem("user", JSON.stringify(newState?.data?.user));
      console.log("UPDATE_PHONENO", action?.payload);
      return {
        ...newState,
      };
    case UPDATE_EMAIL:
      window.localStorage.removeItem("table");
      newState = {
        ...state,
        isAuthenticated: true,
        data: {
          ...state.data,
          user: {
            ...state?.data?.user,
            email: action?.payload?.data?.email,
          },
        },
      };
      window.localStorage.setItem("user", JSON.stringify(newState?.data?.user));
      console.log("UPDATE_EMAIL", action?.payload);
      return {
        ...newState,
      };

    case TOKEN_REMOVE:
      window.localStorage.removeItem("table");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        success: false,
        data: {
          ...state.data,
          token: null,
          user: null,
        },
      };
    case DELETE_SIGNUP_DATA:
      window.localStorage.removeItem("table");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        success: false,
        data: {
          ...state.data,
          token: null,
          user: null,
        },
      };
    default:
      return state;
  }
};

export default usersReducer;
