import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Avatar,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { signupAction } from "../../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./signUp.css";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phoneNo: "",
    password: "",
    passwordConfirmation: "",
    roleName: "user",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (user, e) => {
    e.preventDefault();
    dispatch(signupAction(user));
  };

  const isSignedUp = useSelector((state) => state.auth.success);

  useEffect(() => {
    if (isSignedUp) navigate("/signin");
  }, [isSignedUp, navigate]);

  return (
    <Box
      className="signBox"
      sx={{
        my: "20px",
      }}
    >
      <div>
        <Box sx={{ position: "absolute", right: 0, top: 0, padding: "20px" }}>
          <RouterLink to="/">
            <HighlightOffIcon fontSize="medium" sx={{ color: "gray" }} />
          </RouterLink>
        </Box>
        <Avatar sx={{ width: 32, height: 32 ,bgcolor: "rgb(220, 178, 40)" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="subtitle1">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          mt={1}
          onSubmit={(e) => onSubmit(user, e)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                autoFocus
                id="username"
                label="username"
                name="username"
                autoComplete="family-name"
                onChange={(e) => handleOnChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => handleOnChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phoneNo"
                label="Phone Number"
                name="phoneNo"
                type="text"
                autoComplete="phoneNo  "
                onChange={(e) => handleOnChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                onChange={(e) => handleOnChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="passwordConfirmation"
                label="passwordConfirmation"
                type="password"
                id="passwordConfirmation"
                autoComplete="passwordConfirmation"
                onChange={(e) => handleOnChange(e)}
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="left">
              <FormControlLabel
                required
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I Confirm the information."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mb: 1, bgcolor: "rgb(220, 178, 40)" }}
          >
            Sign Up
          </Button>
          <Grid
            item
            xs={12}
            display="flex"
            className="link"
            justifyContent="right"
          >
            <Link mt={2} component={RouterLink} to={"/signin"} variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Box>
      </div>
    </Box>
  );
};

export default SignUp;
