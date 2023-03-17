import { Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Layout from "../Components/Layout";
import { theme } from "../Theme/ThemeMode";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Stack height={"70vh"} alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h2">404</Typography>
          <Typography variant="h5">Not Found!</Typography>
        </Stack>
      </Layout>
    </ThemeProvider>
  );
}
