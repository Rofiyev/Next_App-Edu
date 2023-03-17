import { ThemeProvider } from "@mui/material";
import { getDashboardData } from "../Api";
import Layout from "../Components/Layout";
import DashboardMain from "../Components/Main/Dashboard";
import { theme } from "../Theme/ThemeMode";

export default function Home({ res }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <DashboardMain data={res} />
      </Layout>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const res = await getDashboardData("dashboard");
  return { props: { res } };
}
