import { Box, Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logOutAction } from "../../redux/actions/users";
import { useNavigate } from "react-router-dom";
import "./SignOut.css";

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOutAction());
    navigate("/");
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
      <Avatar
        className="logOutLogo"
        sx={{ mt: -1, mb: -1, bgcolor: "inherit" }}
        onClick={() => handleLogOut()}
      >
        <LogoutIcon />
      </Avatar>
    </Box>
  );
};

export default SignOut;
