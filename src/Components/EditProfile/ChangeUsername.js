import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateUsernameAction } from "../../redux/actions/users";

const ChangeUsername = () => {
  const user = useSelector((state) => state?.auth?.data?.user);
  const initData = { newUsername: user.username, password: "" };
  const [data, setData] = useState(initData);
  const dispatch = useDispatch();

  const handleOnChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnChangeUsername = () => {
    dispatch(updateUsernameAction(data)).then(()=>
    setData(initData));
  };

  return (
    <Container className="proData"
      sx={{
        display: "flex",
        flexDirection: "column",
        // ml: "4em",
        // margin: "auto",
        // padding: "auto",
        // width: "60vw",
        // mb: "20px",
        // mt: "2em",
        // backgroundColor:"white"
      }}
    >
      <TextField
        id="Username"
        name="newUsername"
        label="Username"
        variant="standard"
        helperText={`To change the current username.`}
        defaultValue={user?.username}
        required={false}
        onChange={handleOnChangeInput}
      />
      <TextField
        id="password"
        name="password"
        label="Re-Enter your password"
        variant="standard"
        helperText={`Enter password for authorization to change username`}
        required={false}
        onChange={handleOnChangeInput}
        type="password"
        value={data.password}
      />
      <Button
        sx={{
          width: "fit-content",
          m: "5px auto",
          textTransform: "capitalize",
        }}
        variant="contained"
        size="small"
        onClick={handleOnChangeUsername}
      >
        Change username
      </Button>
    </Container>
  );
};

export default ChangeUsername;
