import { ThemeProvider, Typography } from "@mui/material";
import Layout from "../Components/Layout";
import Dashboard from "../Components/Layout";
import DashboardMain from "../Components/Main/Dashboard";
import { theme } from "../Theme/ThemeMode";

export default function Teams() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/* <DashboardMain /> */}
        <Typography variant="h4">Projects</Typography>
      </Layout>
    </ThemeProvider>
  );
}
