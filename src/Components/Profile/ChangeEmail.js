import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateEmailAction } from "../../redux/actions/users";

const ChangeEmail = () => {
  

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
      
      {/* <TextField
        label="Password"
        variant="standard"
        type={"password"}
        helperText={`Enter password for authorization to change email`}
        name={"password"}
        onChange={handleInputChange}
        value={data.password}
      />
      <Button
        sx={{
          width: "fit-content",
          m: "5px auto",
          // mt: "1em",
          textTransform: "capitalize",
          color: "white",
          // bgcolor: "background.default",
        }}
        variant="contained"
        size="small"
        onClick={handleOnChangeEmail}
      >
        chang email
      </Button> */}
    </Container>
  );
};

export default ChangeEmail;
