import { combineReducers } from "redux";
import usersReducer from "./users";
import subscribersReducer from "./subscribers";
import notificationsReducer from "./notifications";
// import qrcodesReducer from "./qrcodes";

const allReducers = combineReducers({
    auth: usersReducer,
    // qrcodes: qrcodesReducer,
    subscribers: subscribersReducer,
    notifications: notificationsReducer,
})

export default allReducers