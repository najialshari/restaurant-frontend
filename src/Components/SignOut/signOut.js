import {
  Box,
  Avatar,
  
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
// import { deepPurple } from "@mui/material/colors";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { logOutAction } from "../../redux/actions/users";
import { useNavigate } from "react-router-dom";
import './signOut.css';


const SignOut = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleLogOut = async () => {
    
    await dispatch(logOutAction())
   .then((res) =>navigate("/signin"));
  };
 
   
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
         pt: "0",
        
      }}
    >
      <Avatar className="logOutLogo" sx={{ mt: -1,mb: -1,  bgcolor: "inherit" }}
              onClick={() => handleLogOut()} >
        <LogoutIcon /> 
      </Avatar>
    
    </Box>
  );
};

export default SignOut;
