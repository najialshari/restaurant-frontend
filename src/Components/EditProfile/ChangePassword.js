import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { updatePasswordAction } from "../../redux/actions/users";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    currPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnChangePassword = () => {
    dispatch(updatePasswordAction(data));
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: "4em",
        margin: "auto",
        padding: "auto",
        width: "85vw",
        mb: "20px",
      }}
    >
      <TextField
        id="Current password"
        label="Current password"
        variant="standard"
        type={"password"}
        name={"currPassword"}
        helperText={`Enter current password for authorization`}
        onChange={handleInputChange}
      />
      <TextField
        id="New password"
        label="New password"
        variant="standard"
        type={"password"}
        name={"newPassword"}
        helperText={`Enter the new password`}
        onChange={handleInputChange}
      />
      <TextField
        id="Password confirmation"
        label="Password confirmation"
        variant="standard"
        type={"password"}
        name={"newPasswordConfirmation"}
        helperText={`Re-enter the new password`}
        onChange={handleInputChange}
      />
      <Button
        sx={{
          width: "fit-content",
          ml: "2em",
          mt: "1em",
          textTransform:"capitalize"
        }}
        variant="contained"
        size="small"
        onClick={handleOnChangePassword}
      >
        change password
      </Button>
    </Container>
  );
};

export default ChangePassword;
