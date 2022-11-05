import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

let theme = createTheme({
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
    },
  },
  typography: {
    h5: {
      fontSize: 22,
      marginBottom: 15,
      marginLeft: 30,
      fontWeight: 600,
    },
  },
});

export default theme;
