import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

let theme = createTheme({
  typography: {
    fontFamily: ['Urbanist']
  },
  palette: {
    primary: {
      main: orange[700],
      contrastText: "#fff", //button text white instead of black
    },
    secondary: {
      main: "#ffffff",
    },
    grayed: {
      main: "#f5f5f5",
      inputsBackground: "#F0F0F0",
    },
  },
  typography: {
    h5: {
      fontSize: 22,
      marginBottom: 15,
      fontWeight: 600,
    },
    caption: {
      color: orange[700],
      fontWeight: 500,
    },
  },
});

export default theme;
