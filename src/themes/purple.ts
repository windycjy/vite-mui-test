import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

export default createTheme({
  palette: {
    primary: {
      main: purple[300],
    },
    secondary: {
      main: green[300],
    },
    background: {
      default: purple[800],
    }
  },
});