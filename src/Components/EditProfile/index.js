import { useSelector } from "react-redux";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import ChangePhoneNo from "./ChangePhoneNo";
import ChangeProfilePic from "./ChangeProfilePic";
import ChangeUsername from "./ChangeUsername";
import "./ChangeProfilePic.css";

function Profile() {
  const location = useLocation();
  const signedIn = useSelector((state) => state.auth.data.user);

  return signedIn ? (
    <div className="profile ">
      <ChangeProfilePic />
      <ChangeUsername />
      <ChangeEmail />
      <ChangePhoneNo />
      <ChangePassword />
    </div>
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
}

export default Profile;
