import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateUsernameAction } from "../../redux/actions/users";

const ChangeUsername = () => {
  const user = useSelector((state) => state?.auth?.data?.user);
  const dispatch = useDispatch();


  return (
    <Container className="proData"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      
      {/* <TextField
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
      </Button> */}
    </Container>
  );
};

export default ChangeUsername;
