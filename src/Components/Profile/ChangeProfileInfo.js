import React, { useEffect, useState } from "react";
import { Button, ThemeProvider, Container, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserInfoAction,
  updatePasswordAction,
} from "../../redux/actions/users";
import { myTheme } from "../theme/theme";
import "./style.css";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.auth?.data?.user);
  const pass = useSelector((state) => state?.auth?.password);
  const initData = {
    currPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
    newPhoneNo: user.phoneNo,
    newEmail: user.email,
    newUsername: user.username,
  };

  const [data, setData] = useState(initData);
  const [check, setCheck] = useState("checked");
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdateInfo = () => {
    dispatch(updateUserInfoAction(data));
  };
  const handleUpdatePassword = () => {
    dispatch(updatePasswordAction(data));
  };
  useEffect(() => {
    if (pass)
      setData((data) => ({
        ...data,
        newPassword: "",
        newPasswordConfirmation: "",
        currPassword: "",
      }));
  }, [pass]);

  return (
    <Container className="proData">
      <div className="tabsContainer">
        <div className="tabs">
          <input
            className="input"
            name="tabs"
            type="radio"
            id="tab-1"
            readOnly
            checked={check}
            onClick={() => setCheck("checked")}
          />
          <label className="label" htmlFor="tab-1">
            Account
          </label>
          <div className="panel">
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
            <ThemeProvider theme={myTheme}>
              <Button
                sx={{
                  width: "fit-content",
                  m: "10px auto",
                }}
                variant="contained"
                size="small"
                onClick={handleUpdateInfo}
              >
                Save changes
              </Button>
            </ThemeProvider>
          </div>
          <input
            className="input"
            name="tabs"
            type="radio"
            id="tab-2"
            onClick={() => setCheck("")}
          />
          <label className="label" htmlFor="tab-2">
            Password
          </label>
          <div className="panel">
            <TextField
              id="Current password"
              label="Current password"
              variant="standard"
              type="password"
              name="currPassword"
              onChange={handleInputChange}
              value={data.currPassword}
            />
            <TextField
              id="New password"
              label="New password"
              variant="standard"
              type="password"
              name="newPassword"
              onChange={handleInputChange}
              value={data.newPassword}
            />
            <TextField
              id="Password confirmation"
              label="Password confirmation"
              variant="standard"
              type="password"
              name="newPasswordConfirmation"
              onChange={handleInputChange}
              value={data.newPasswordConfirmation}
            />
            <ThemeProvider theme={myTheme}>
              <Button
                sx={{
                  width: "fit-content",
                  m: "10px auto",
                }}
                variant="contained"
                size="small"
                onClick={handleUpdatePassword}
              >
                Save changes
              </Button>
            </ThemeProvider>
          </div>
          <input
            className="input"
            name="tabs"
            type="radio"
            id="tab-3"
            onClick={() => setCheck("")}
          />
          <label className="label" htmlFor="tab-3">
            Addresses
          </label>
          <div className="panel">
            <ThemeProvider theme={myTheme}>
              <Button
                sx={{
                  width: "fit-content",
                  m: "5px auto",
                }}
                variant="contained"
                size="small"
                onClick={handleUpdateInfo}
              >
                Save changes
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChangePassword;
