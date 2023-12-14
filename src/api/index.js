const API_ROOT = process.env.REACT_APP_API_URL;
// const API_ROOT = "http://localhost:8000/api/v1";

const API_URLS = (extraData) => ({
  // the extraData can be used to send url params and request query data if needed to api.
  ROOT: API_ROOT,
  AUTH: {
    SIGNIN: API_ROOT + "/users/signin/",
    SIGNUP: API_ROOT + "/users/signup/",
    LOGOUT: API_ROOT + "/users/logout/",
    UPDATE_PASSWORD: API_ROOT + "/users/updatepassword/",
    UPDATE_USERNAME: API_ROOT + "/users/updateusername/",
    UPDATE_EMAIL: API_ROOT + "/users/updateemail",
    UPDATE_PHONENO: API_ROOT + "/users/updatephoneno",
    GET_USERINFO: API_ROOT + "/users/",
    UPDATE_PROFILEPIC: API_ROOT + "/users/updateprofilepic/",
    DELETE_USER: API_ROOT + "/users/"+ extraData,
    RESET_PASSWORD: API_ROOT + "/users/resetpassword"
  },
  MENU: {
    GET_MENU_CATEGORIES: API_ROOT + "/menus/categories",
    GET_MENU_CATEGORY_MEALS: API_ROOT + "/menus/categoryMeals",
    GET_MENU_CATEGORY_MEALS_BY_ID: API_ROOT + "/menus/categoryMeals/"+ extraData,
    GET_MENU_MEALS: API_ROOT + "/menus/Meals",
   
    
  },
  QRCODE: {
    SCANE_QR_FOR_TABLES: API_ROOT + "/qrcodes/scan/"+ extraData,
    // SCANE_QR_FOR_MENU: API_ROOT + "/qrcodes/menu"
  },
  SUBSCRIBERS : {
    SUBSCRIBE : API_ROOT + "/subscription/",
    // SUBSCRIBE :"https://www.wp-course.site//wp-json/youthink/subscribe",
    GET_ALL_SUBSCRIBERS : API_ROOT + "/subscription/allsubscribers",
    GET_ACTIVE_SUBSCRIBERS : API_ROOT + "/subscription/activesubscribers",
    DELETE_SUBSCRIBER : API_ROOT + "/subscription/"
  },
  ORDERS : {
    ADD_ORDERS : API_ROOT + "/orders/",
  }
});

export default API_URLS;
