import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: orange[700],
      contrastText: "#fff" //button text white instead of black
    },
    secondary: {
      main: "#ffffff",
    },

  },
});

export default theme;