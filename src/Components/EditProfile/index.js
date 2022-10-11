import { useSelector } from "react-redux";
import { Navigate, useNavigate , useLocation } from "react-router-dom";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import ChangePhoneNo from "./ChangePhoneNo";
import ChangeProfilePic from "./ChangeProfilePic";
import ChangeUsername from "./ChangeUsername";


function Profile() {
  const navigate = useNavigate();
  const isSignedIn = useSelector(state => state.auth.isAuthenticated)
  const userData = useSelector(state => state.auth.data)
  console.log("in Edit Profile userData,",userData)
  console.log("in Edit Profile isSignedIn,",isSignedIn)
  if(!isSignedIn)navigate("/signIn")

  const location = useLocation();
  
    return (
      isSignedIn?(
      <div className="profile "
      
      >
        <ChangeProfilePic />
        <ChangeUsername />
        <ChangeEmail />
        <ChangePhoneNo />
        <ChangePassword />
      </div >):
      (
        <Navigate to="/signin" state={{ from: location }} replace />
      )

    )}

export default Profile;