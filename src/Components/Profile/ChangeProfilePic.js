import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
  Button,
  Box,
  ThemeProvider,
} from "@mui/material";
import { Close, FileUpload } from "@mui/icons-material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProfilePicAction } from "../../redux/actions/users";
import "./Profile.css";
import { myTheme } from "../theme/theme";

const ChangeProfilePic = () => {
  const user = useSelector((state) => state?.auth?.data?.user);
  const [open, setOpen] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserPhoto(e.target.files[0]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    const formData = new FormData();
    formData.append("file", userPhoto);
    try {
      dispatch(updateProfilePicAction(formData));
      setOpen(false);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <div className="updatePhotoContainer">
        <Box sx={{ position: "absolute", right: "20px", top: "20px" }}>
          <RouterLink to="/">
            <Close
              sx={{
                boxShadow: 3,
                borderRadius: "50%",
                backgroundColor: "white",
                padding: "2px",
              }}
            />
          </RouterLink>
        </Box>
        <div>
          <img className="profilePhoto" alt="hi" src={user && user?.photo} />
        </div>
        <div>
          <Typography
            id="username"
            variant="caption"
            sx={{
              fontSize: "1em",
              width: "fit-content",
              color: "black",
            }}
          >
            {user?.username}
          </Typography>
        </div>
        <div>
          <ThemeProvider theme={myTheme}>
            <Button
              sx={{
                width: "fit-content",
              }}
              size="small"
              variant="contained"
              endIcon={<FileUpload />}
              onClick={handleClickOpen}
            >
              change photo
            </Button>
          </ThemeProvider>
        </div>
        {/* </div> */}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Profile Picture</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="todo"
            type="file"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save photo</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ChangeProfilePic;
