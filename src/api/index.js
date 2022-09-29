const API_ROOT = process.env.REACT_APP_API_URL;
console.log("TEST API", API_ROOT)

const API_URLS = (extraData) => ({
  // the extraData can be used to send url params and request query data if needed to api.
  ROOT: API_ROOT,
  AUTH: {
    SIGNIN: API_ROOT + "/users/signin/",
    SIGNUP: API_ROOT + "/users/signup/",
    LOGOUT: API_ROOT + "/users/logout/",
    UPDATE_PASSWORD: API_ROOT + "/users/updatepassword/",
    UPDATE_USERNAME: API_ROOT + "/users/updateusername/",
    UPDATE_EMAIL: API_ROOT + "/users/updatemail/",
    GET_USERINFO: API_ROOT + "/users/",
    UPDATE_PROFILEPIC: API_ROOT + "/users/updateprofilepic/",
    DELETE_USER: API_ROOT + "/users/",
  },
  LINKS: {
    GET_USERLINKS: API_ROOT + "/links/",
    REORDER_LINKS : API_ROOT + "/links/reorder",
    EDIT_LINK: API_ROOT+ "/links/",
    DELETE_LINK: API_ROOT+ "/links/",
    GET_LINK_TYPES: API_ROOT+ "/links/linkTypes/",
    ADD_NEW_LINK: API_ROOT+ "/links/",
    GET_QR: API_ROOT+ "/qrcodes/",
  },
  QRCODE: {
    CREATE_QR_CODE: API_ROOT + "/qrcodes/",
    SCANE_QR_FOR_TABLES: API_ROOT + "/qrcodes/qrytables",
    SCANE_QR_FOR_MENU: API_ROOT + "/qrcodes/menu"
  },
  SUBSCRIBERS : {
    SUBSCRIBE : API_ROOT + "/subscription",
    GET_ALL_SUBSCRIBERS : API_ROOT + "/subscription/allsubscribers",
    GET_ACTIVE_SUBSCRIBERS : API_ROOT + "/subscription/activesubscribers",
    DELETE_SUBSCRIBER : API_ROOT + "/subscription/"
  }
});

export default API_URLS;
