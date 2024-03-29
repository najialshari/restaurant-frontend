import {
  SIGNUP_NEW_USER,
  DELETE_SIGNUP_DATA,
  FETCH_TOKEN,
  FETCH_TOKEN_FAILED,
  TOKEN_REMOVE,
  GET_USERINFO,
  UPDATE_PASSWORD,
  UPDATE_USERNAME,
  UPDATE_EMAIL,
  UPDATE_PHONENO,
  UPDATE_PROFILEPIC,
  DELETE_USER,
  UPDATE_USERINFO,
  CLEAR_PASSWORD,
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helper";

export const signupAction = (userData) => {
  return async (dispatch) => {
    let data = {
      url: API_URLS().AUTH.SIGNUP,
      method: "POST",
      body: {
        ...userData,
      },
    };
    await requestApi(data).then((res) => {
      dispatch({ type: SIGNUP_NEW_USER, payload: res?.data });
    });
  };
};

export const deleteSignupDataAction = (userData) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_SIGNUP_DATA });
  };
};

export const signinAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.SIGNIN,
    method: "POST",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: FETCH_TOKEN, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
      dispatch({ type: FETCH_TOKEN_FAILED });
    });
};

export const logOutAction = () => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.LOGOUT,
    method: "POST",
  };
  await requestApi(data).then(() => dispatch({ type: TOKEN_REMOVE }));
};

export const getUserInfoAction = () => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.GET_USERINFO,
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: GET_USERINFO, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
      dispatch({ type: FETCH_TOKEN_FAILED });
    });
};

export const updatePasswordAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.UPDATE_PASSWORD,
    method: "PATCH",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then(() => {
      dispatch({ type: UPDATE_PASSWORD });
    })
    .catch((e) => {
      dispatch({ type: CLEAR_PASSWORD });
      console.error(e);
    });
};

export const updateUsernameAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.UPDATE_USERNAME,
    method: "PATCH",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: UPDATE_USERNAME, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
    });
};

export const updateEmailAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.UPDATE_EMAIL,
    method: "PATCH",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: UPDATE_EMAIL, payload: res.data });
    })
    .catch((e) => {
      console.error(e);
    });
};

export const updatePhoneNoAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.UPDATE_PHONENO,
    method: "PATCH",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: UPDATE_PHONENO, payload: res.data });
    })
    .catch((e) => {
      console.error(e);
    });
};

export const updateProfilePicAction = (formData) => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.UPDATE_PROFILEPIC,
    method: "PATCH",
    body: formData,
    contentType: "multipart/form-data",
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: UPDATE_PROFILEPIC, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
    });
};

export const deleteUserAction = () => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.DELETE_USER,
    method: "DELETE",
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: DELETE_USER });
    })
    .catch((e) => {
      console.error(e);
    });
};

export const resetPasswordAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.RESET_PASSWORD,
    method: "PATCH",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: SIGNUP_NEW_USER, payload: res.data });
    })
    .catch((e) => {
      console.error(e);
    });
};

export const updateUserInfoAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.UPDATE_USERINFO,
    method: "PATCH",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: UPDATE_USERINFO, payload: res.data });
    })
    .catch((e) => {
      console.error(e);
    });
};
