import { ThemeProvider, Typography } from "@mui/material";
import Dashboard from "../Components/Layout";
import { theme } from "../Theme/ThemeMode";

export default function Teams() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard>
        <Typography variant="h4">Employees</Typography>
      </Dashboard>
    </ThemeProvider>
  );
}
