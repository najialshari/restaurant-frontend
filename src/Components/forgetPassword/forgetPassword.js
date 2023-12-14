import { Box, Avatar, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePasswordAction } from "../../redux/actions/users";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import "./forgetPassword.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const ForgetPassword = () => {
  const [data, setData] = useState({
    usernameOrEmail: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePasswordAction({ usernameOrPassword: data })).then((res) => {
      console.log(res);
      if (res.success)
        setTimeout(() => {
          navigate("/signin");
        }, 3000);
      else return;
    });
  };
  return (
    <Box className="signBox">
      <div>
      <Box sx={{ position: "absolute",right:0, top:0, padding:"20px"}}>
          <RouterLink to="/signin">
            <HighlightOffIcon fontSize="medium" sx={{ color: "gray" }} />
          </RouterLink>
        </Box>
        <Avatar sx={{ width: 32, height: 32 ,bgcolor: "rgb(220, 178, 40)" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="subtitle1">
          Reset Password
        </Typography>
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
            id="usernameOrEmail"
            label="Email"
            name="usernameOrEmail"
            autoFocus
            onChange={(e) => handleOnChange(e)}
            value={data.usernameOrEmail}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              my: 1,
              textTransform: "capitalize",
              bgcolor: "rgb(220, 178, 40)",
            }}
          >
            Reset Password
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default ForgetPassword;
