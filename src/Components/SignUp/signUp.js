import { useState , useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Avatar,
  Button,
  Link,
} from "@mui/material";
// import { deepPurple } from "@mui/material/colors";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { signupAction ,deleteSignupDataAction } from "../../redux/actions/users";
import { useDispatch, useSelector} from "react-redux";
// import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './signUp.css';



const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phoneNo: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const deleteSignupData = async () => {
  //   await dispatch(deleteSignupDataAction())
  //     .then(() => console.log("deleteSignedIn", "sucess"))
  //     .catch((err) => console.error("disPatch err",err))
      
  // };
  // deleteSignupData();
 

  const handleOnChange = (e) => {
    user[e.target.name] = e.target.value;
  };

  const onSubmit = async (user, e) => {
    e.preventDefault();
    console.log("User Sign Up Data?",user)
    await dispatch(signupAction(user))
    // .then(()=>console.log("Sign UP Action done",user)) 
  };

  const isSignedUp = useSelector(state => state.auth.success);
  
  const [isSignedUpNow, setIsSignedUpNow] = useState(isSignedUp);
  useEffect(()=>{
    // setIsSignedUpNow(isSignedUp);
    console.log("isSignedup,",isSignedUp)
    if(isSignedUp)navigate("/signin")
  }, [isSignedUp]);

  

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
        // width: "40vw",
        // height: "100vh",
        
      }}
    >
      <Avatar sx={{ m: 1, bgcolor:"rgb(220, 178, 40)" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate 
      onSubmit={(e) => onSubmit(user, e)}
       sx={{ mt: 3 }}>
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
          sx={{ mt: 3, mb: 2 ,bgcolor:"rgb(220, 178, 40)"}}
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
