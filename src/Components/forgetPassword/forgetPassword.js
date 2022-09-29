import {
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  Link,
  Checkbox
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { deepPurple } from "@mui/material/colors";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { signinAction } from "../../redux/actions/users";
// import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {

    const [userData, setUserData] = useState({
      usernameOrEmail: ""
    })

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleOnChange =  (e) =>{
        userData[e.target.name] = e.target.value
    } 
    // const handleSubmit = async (userData ,e) => {
    //     e.preventDefault();
    //     await dispatch(signinAction(userData)).then(()=> navigate("/me")
    //     )
    // }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        m: "auto",
        width: "60vw",
        height: "50vh"
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "rgb(220, 178, 40)" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
      Forget Password
      </Typography>
      <Box component="form" 
      // onSubmit={e => handleSubmit(userData, e)} 
      noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email or Username"
          name="account"
          // autoFocus
          onChange={(e) => handleOnChange(e)}
        />
        
        {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        /> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 ,bgcolor:"rgb(220, 178, 40)"}}
          
        >
          Reset Password
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="/signin" variant="body2">
              Sign In
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

export default ForgetPassword;
