import {
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  Checkbox,
  Link,
  ThemeProvider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signinAction } from "../../redux/actions/users";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "./signIn.css";
import { myTheme } from "../theme/theme";

const SignIn = () => {
  const [userData, setUserData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (userData, e) => {
    e.preventDefault();
    dispatch(signinAction(userData));
  };
  const isSignedIn = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isSignedIn) navigate("/");
  }, [isSignedIn, navigate]);

  return (
    <Box className="signBox">
      <div>
        <Box sx={{ position: "absolute", right: 0, top: 0, padding: "20px" }}>
          <RouterLink to="/">
            <HighlightOffIcon fontSize="medium" sx={{ color: "gray" }} />
          </RouterLink>
        </Box>
        <ThemeProvider theme={myTheme}>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="subtitle1">Sign in</Typography>
          <Box
            component="form"
            onSubmit={(e) => handleSubmit(userData, e)}
            noValidate
          >
            <TextField
              required
              id="usernameOrEmail"
              label="Email or Username"
              name="usernameOrEmail"
              autoFocus
              onChange={(e) => handleOnChange(e)}
            />
            <TextField
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => handleOnChange(e)}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained">
              Sign In
            </Button>
            <Box
              mt={2}
              display="flex"
              justifyContent="space-between"
              className="link"
            >
              <Grid item xs={8}>
                <Link
                  component={RouterLink}
                  to={"/forgetPassword"}
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to={"/signup"} variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </Box>
  );
};

export default SignIn;
