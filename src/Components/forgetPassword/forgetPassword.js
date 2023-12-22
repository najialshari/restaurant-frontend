import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAction } from "../../redux/actions/users";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import "./forgetPassword.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Close from "@mui/icons-material/Close";
import { myTheme } from "../theme/theme";

const ForgetPassword = () => {
  const [data, setData] = useState({
    email: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordAction(data));
  };

  const isResetPassword = useSelector((state) => state.auth.success);
  useEffect(() => {
    if (isResetPassword) {
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    }
  }, [isResetPassword, navigate]);

  return (
    <Box className="signBox">
      <div>
        <Box sx={{ position: "absolute", right: 0, top: 0, padding: "20px" }}>
          <RouterLink to="/signin">
          <Close
                sx={{
                  boxShadow: 3,
                  borderRadius: "50%",
                  backgroundColor:"white",
                  padding:"2px"
                }}
              />          </RouterLink>
        </Box>
        <ThemeProvider theme={myTheme}>
          <Avatar sx={{ width: 32, height: 32 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="subtitle1">Reset Password</Typography>
          <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            noValidate
            sx={{ mt: 1 }}
          >
            <label>Please enter your email to reset password</label>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
              onChange={(e) => handleOnChange(e)}
              value={data.email}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Reset Password
            </Button>
          </Box>
        </ThemeProvider>
      </div>
    </Box>
  );
};

export default ForgetPassword;
