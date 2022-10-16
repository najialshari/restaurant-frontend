import {
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  Link,
  Checkbox,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { deepPurple } from "@mui/material/colors";
import { useState ,useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import { signinAction } from "../../redux/actions/users";
import { useNavigate } from "react-router-dom";
import './signIn.css';


const SignIn = () => {
  const [userData, setUserData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    userData[e.target.name] = e.target.value;
  };
  const handleSubmit = async (userData, e) => {
    e.preventDefault();
    await dispatch(signinAction(userData))
    // .then((res) =>navigate("/signin"));
  };
  const isSignedIn = useSelector(state => state.auth.isAuthenticated)
  // console.log("isSignedIn,",isSignedIn)
  // if(isSignedIn)navigate("/")

//useEffect

useEffect(()=>{
  console.log("isSignedIn,",isSignedIn)
  if(isSignedIn)navigate("/")
}, [isSignedIn]);



  return (
    <Box
    className="signBox"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        m: "10px auto",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "rgb(220, 178, 40)" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={(e) => handleSubmit(userData, e)}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email or Username"
          name="usernameOrEmail"
          autoFocus
          onChange={(e) => handleOnChange(e)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "rgb(220, 178, 40)" }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="/forgetpassword" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignIn;
