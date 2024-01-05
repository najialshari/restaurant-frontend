import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { updatePasswordAction } from "../../redux/actions/users";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const initData = {
    currPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
  };
  const [data, setData] = useState(initData);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnChangePassword = () => {
    dispatch(updatePasswordAction(data)).then(() => setData(initData));
  };
  return (
    <Container className="proData"
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: "4em",
        margin: "auto",
        padding: "auto",
        // width: "60vw",
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
        value={data.currPassword}
      />
      <TextField
        id="New password"
        label="New password"
        variant="standard"
        type={"password"}
        name={"newPassword"}
        helperText={`Enter the new password`}
        onChange={handleInputChange}
        value={data.newPassword}
      />
      <TextField
        id="Password confirmation"
        label="Password confirmation"
        variant="standard"
        type={"password"}
        name={"newPasswordConfirmation"}
        helperText={`Re-enter the new password`}
        onChange={handleInputChange}
        value={data.newPasswordConfirmation}
      />
      <Button
        sx={{
          width: "fit-content",
          m: "5px auto",
          textTransform: "capitalize",
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
