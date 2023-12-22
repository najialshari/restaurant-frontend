import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { updatePhoneNoAction } from "../../redux/actions/users";

const ChangePhoneNo = () => {
  const user = useSelector((state) => state?.auth?.data?.user);
  const initData = {
    newPhoneNo: user.phoneNo,
    password: "",
  };
  const dispatch = useDispatch();
  const [data, setData] = useState(initData);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnChangePhoneNo = () => {
    dispatch(updatePhoneNoAction(data)).then(() => setData(initData));

  };
  return (
    <Container className="proData"
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: "4em",
        margin: "auto",
        padding: "auto",
        width: "60vw",
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
        value={data.password}
      />
      <Button
        sx={{
          width: "fit-content",
          m: "5px auto",
          // mt: "1em",
          textTransform: "capitalize",
          color: "white",
        }}
        variant="contained"
        size="small"
        onClick={handleOnChangePhoneNo}
      >
        change phone number
      </Button>
    </Container>
  );
};

export default ChangePhoneNo;
