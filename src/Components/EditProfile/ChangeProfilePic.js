import React, { useState } from "react";
// import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useSelector, useDispatch } from "react-redux";
import { updateProfilePicAction } from "../../redux/actions/users";
import "./ChangeProfilePic.css";

const ChangeProfilePic = () => {
  const user = useSelector((state) => state?.auth?.data?.user);
  console.log(user);
  const [open, setOpen] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null);
  const dispatch = useDispatch();

  const handelChange = (e) => {
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
      <div className="updatePhoto">
        <img className="profilePhoto" alt="hi" src={user && user?.photo} />
        <div className="profileName">
          <Typography
            id="username"
            variant="caption"
            sx={{
              size: "2em",
              fontSize: "1em",
              width: "fit-content",
              m: "auto",
            }}
          >
            {user?.username}
          </Typography>
          <Button
            sx={{
              width: "fit-content",
              textTransform: "capitalize",
              m: "auto",
            }}
            variant="contained"
            endIcon={<FileUploadIcon />}
            onClick={handleClickOpen}
          >
            upload Image
          </Button>
        </div>
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
            onChange={handelChange}
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
