import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  status: {
    danger: orange[500],
  },
});
