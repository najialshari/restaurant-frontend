import { SCAN_QR, NOT_FOUND ,TOKEN_REMOVE } from "../constants";

const initialState = {
    success: false,
    data: {
        token: window.localStorage.getItem("token") || null,
      table: JSON.parse(window.localStorage.getItem("table")) || null
    },
    isAuthenticated: false,
}

const qrcodesReducer = (state = initialState, action) => {
    switch(action.type){
       
      case SCAN_QR:
        window.localStorage.setItem("token", action?.payload?.data?.token);
      window.localStorage.setItem("user", JSON.stringify(action?.payload?.data?.table));
      return {
        success: action?.payload?.success,
        messages: action?.payload?.messages,
        data: {
          table: action?.payload?.data?.table,
          token: action?.payload?.data?.token
        },
        isAuthenticated: true,
      };
     case NOT_FOUND: 
     window.localStorage.removeItem("token");
     window.localStorage.removeItem("table");
     return {
       success: false,
       isAuthenticated: false,
       data:{
         table: null,
         token: null
       }
     };                
     case TOKEN_REMOVE: 
     window.localStorage.removeItem("token");
     window.localStorage.removeItem("table");
     return {
       success: false,
       isAuthenticated: false,
       data:{
         table: null,
         token: null
       }
     };                
        default:
            return state;
    }
}

export default qrcodesReducer;