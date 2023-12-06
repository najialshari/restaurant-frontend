import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateEmailAction } from "../../redux/actions/users";

const ChangeEmail = () => {
  const user = useSelector((state) => state?.auth?.data?.user);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    newEmail: user.email,
    password: "",
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnChangeEmail = async () => {
    await dispatch(updateEmailAction(data))
      .then(() => console.log("yes"))
      .catch(() => console.log("no"));
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
        label="Email"
        variant="standard"
        type={"email"}
        helperText={`Enter the email here`}
        name={"newEmail"}
        onChange={handleInputChange}
        defaultValue={user.email}
      />
      <TextField
        label="Password"
        variant="standard"
        type={"password"}
        helperText={`Enter password for authorization to change email`}
        name={"password"}
        onChange={handleInputChange}
      />
      <Button
        sx={{
          width: "fit-content",
          ml: "2em",
          mt: "1em",
          textTransform: "capitalize",
          color: "white",
          // bgcolor: "background.default",
        }}
        variant="contained"
        size="larg"
        onClick={handleOnChangeEmail}
      >
        chang email
      </Button>
    </Container>
  );
};

export default ChangeEmail;
