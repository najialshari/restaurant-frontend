import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { updatePhoneNoAction } from "../../redux/actions/users";

const ChangePhoneNo = () => {
  const user = useSelector((state) => state?.auth?.data?.user);
  console.log(user);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    newPhoneNo: user.phoneNo,
    password: "",
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnChangePhoneNo = () => {
    dispatch(updatePhoneNoAction(data));
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
        label="Phone Number"
        variant="standard"
        type={"number"}
        helperText={`Enter the Phone No here`}
        name={"newPhoneNo"}
        onChange={handleInputChange}
        defaultValue={user.phoneNo}
      />
      <TextField
        label="Password"
        variant="standard"
        type={"password"}
        helperText={`Enter password for authorization to change Phone No.`}
        name="password"
        onChange={handleInputChange}
      />
      <Button
        sx={{
          width: "fit-content",
          ml: "2em",
          mt: "1em",
          textTransform: "capitalize",
          color: "white",
        }}
        variant="contained"
        size="larg"
        onClick={handleOnChangePhoneNo}
      >
        change phone number
      </Button>
    </Container>
  );
};

export default ChangePhoneNo;
