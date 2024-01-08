import { useSelector } from "react-redux";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import ChangePassword from "./ChangeProfileInfo";
import ChangeProfilePic from "./ChangeProfilePic";
import "./profile.css";

function Profile() {
  const location = useLocation();
  const signedIn = useSelector((state) => state.auth.data.user);

  return signedIn ? (
    <div className="profile ">
      <ChangeProfilePic />
      <ChangePassword />
    </div>
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
}

export default Profile;
