import { ThemeProvider, Typography } from "@mui/material";
import Layout from "../Components/Layout";
import { theme } from "../Theme/ThemeMode";

export default function Teams() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/* <DashboardMain /> */}
        <Typography variant="h4">Mettings</Typography>
      </Layout>
    </ThemeProvider>
  );
}
