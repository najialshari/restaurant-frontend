import React, { useState } from "react";
import { Button, ThemeProvider, Container, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfoAction } from "../../redux/actions/users";
import { myTheme } from "../theme/theme";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.auth?.data?.user);

  const initData = {
    currPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
    newPhoneNo: user.phoneNo,
    newEmail: user.email,
    newUsername: user.username,
  };

  const [data, setData] = useState(initData);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnChangePassword = () => {
    dispatch(updateUserInfoAction(data));
  };
  return (
    <Container
      className="proData"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <TextField
        id="Username"
        name="newUsername"
        label="Username"
        variant="standard"
        defaultValue={user?.username}
        onChange={handleInputChange}
      />
      <TextField
        label="Email"
        name="newEmail"
        variant="standard"
        type="email"
        defaultValue={user.email}
        onChange={handleInputChange}
      />
      <TextField
        label="Phone Number"
        name="newPhoneNo"
        variant="standard"
        type="number"
        defaultValue={user.phoneNo}
        onChange={handleInputChange}
      />
      <TextField
        id="Current password"
        label="Current password"
        variant="standard"
        type={"password"}
        name={"currPassword"}
        onChange={handleInputChange}
        value={data.currPassword}
      />
      <TextField
        id="New password"
        label="New password"
        variant="standard"
        type={"password"}
        name={"newPassword"}
        onChange={handleInputChange}
        value={data.newPassword}
      />
      <TextField
        id="Password confirmation"
        label="Password confirmation"
        variant="standard"
        type={"password"}
        name={"newPasswordConfirmation"}
        onChange={handleInputChange}
        value={data.newPasswordConfirmation}
      />
      <ThemeProvider theme={myTheme}>
        <Button
          sx={{
            width: "fit-content",
            m: "5px auto",
          }}
          variant="contained"
          size="small"
          onClick={handleOnChangePassword}
        >
          Save changes
        </Button>
      </ThemeProvider>
    </Container>
  );
};

export default ChangePassword;
