import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
export const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        margin: "normal",
        fullWidth: true,
        size: "small",
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiLink: {
      defaultProps: {},
      styleOverrides: {
        root: {
          "&:link": {
            textDecoration: "none",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          backgroundColor: orange[800],
          "&:hover": {
            backgroundColor: orange[900],
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: "32px",
          height: "32px",
          backgroundColor: orange[800],
        },
      },
    },
  },
});
