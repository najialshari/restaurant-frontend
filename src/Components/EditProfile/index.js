import { useSelector } from "react-redux";
import React  ,{useEffect, useState} from 'react';
import { Navigate, useNavigate , useLocation } from "react-router-dom";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import ChangePhoneNo from "./ChangePhoneNo";
import ChangeProfilePic from "./ChangeProfilePic";
import ChangeUsername from "./ChangeUsername";


function Profile() {
  const navigate = useNavigate();
  // const isSignedIn = useSelector(state => state.auth.isAuthenticated)
  // console.log("in Edit Profile isSignedIn,",isSignedIn)

  // const isTableTokenAvailable = useSelector(state => state?.qrcodes?.data?.table);
  //   console.log(" in Edit Profile Table ,",isTableTokenAvailable)
  

  // const [isTableTokenAvailable,setIsTableTokenAvailable]=useState({}) 
    const [isSignedIn,setIsSignedIn]=useState({}) 
    // const tableToken = useSelector(state => state.qrcodes.data.table);
    // console.log(" in NavBaris Table Token ,",tableToken)
    // useEffect(()=>{
    //   setIsTableTokenAvailable(tableToken)
    //   console.log("use Eff in NavBaris Table Token ,",isTableTokenAvailable)
    // },[tableToken]);

    const signedIn = useSelector(state => state.auth.data.user);
console.log("in NavBar is User Signed In ",signedIn)

useEffect(()=>{
    setIsSignedIn(signedIn)
    console.log("use Eff in NavBar is User Signed In ",isSignedIn)

  },[signedIn]);
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