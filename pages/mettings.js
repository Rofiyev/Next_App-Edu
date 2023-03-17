import { ThemeProvider, Typography } from "@mui/material";
import Layout from "../Components/Layout";
import { theme } from "../Theme/ThemeMode";

export default function Mettings() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Typography variant="h4">Mettings</Typography>
      </Layout>
    </ThemeProvider>
  );
}
