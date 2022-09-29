import { combineReducers } from "redux";
import usersReducer from "./users";
import subscribersReducer from "./subscribers";
import notificationsReducer from "./notifications";
import qrcodesReducer from "./qrcodes";
import menuReducer from "./menu";
import categoriesReducer from "./categories";

const allReducers = combineReducers({
    auth: usersReducer,
    qrcodes: qrcodesReducer,
    subscribers: subscribersReducer,
    notifications: notificationsReducer,
    menu:menuReducer,
    categories:categoriesReducer
})

export default allReducers