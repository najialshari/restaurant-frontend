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
import {
  signupAction,
} from "../../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    setUser(user[e.target.name] = e.target.value);
  };

  const onSubmit = async (user, e) => {
    e.preventDefault();
    dispatch(signupAction(user));
  };

  const isSignedUp = useSelector((state) => state.auth.success);

  useEffect(() => {
    if (isSignedUp) navigate("/signin");
  }, [isSignedUp,navigate]);

  return (
    <Box
      className="signBox"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        m: "10px auto",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "rgb(220, 178, 40)" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={(e) => onSubmit(user, e)}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
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
              type="number"
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
          <Grid item xs={12}>
            <FormControlLabel
              required
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I Conformed The Information."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "rgb(220, 178, 40)" }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/signin" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUp;
