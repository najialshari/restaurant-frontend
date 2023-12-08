import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { toggleNotfOff } from "../../redux/actions/notifications";

const Notification = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const {
    message,
    variant,
    open: openGlobal
  } = useSelector((state) => state.notifications);

  const handleClose = () => {
    setOpen(false);
    dispatch(toggleNotfOff());
  };

  useEffect(() => {
    openGlobal && setOpen(true);
  }, [openGlobal, variant, message]);

  return (
    <div>
      {message?
      <Snackbar
        sx={{ height: "25%" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        onClick={handleClose}
      >
        {openGlobal && (variant === "error" || variant === "warning") ? (
          <Alert
            variant="filled"
            severity={variant}
            style={{ minWidth: "150px" }}
          >
            {message || "something went wrong"}
          </Alert>
        ) : (
          <Alert
            variant="filled"
            severity={variant}
            style={{ minWidth: "150px" }}
          >
            {message || "success"}
          </Alert>
        )}
      </Snackbar>:null}
    </div>
  );
};

export default Notification;