import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Layout from "../../Components/Layout";
import { theme } from "../../Theme/ThemeMode";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getTeamData } from "../../Api";
import { useRouter } from "next/router";

export default function Home({ data }) {
  console.log(data);
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h4" mb={2}>
            About the user
          </Typography>
          <IconButton onClick={() => router.push("/teams")}>
            <ArrowBackIcon />
          </IconButton>
        </Stack>
        <Grid container spacing={2}>
          <Grid item sm={12} md={5} sx={{ height: "450px" }}>
            <Avatar
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              variant="rounded"
              src={data.img}
            />
          </Grid>
          <Grid item sm={12} md={7} sx={{ height: "400pxx" }}>
            <Stack
              height={"100%"}
              direction={"column"}
              justifyContent={"center"}
              gap={"20px"}
            >
              <Stack direction={"column"}>
                <Typography variant="h6">
                  <Typography
                    component={"span"}
                    variant="span"
                    sx={{ fontWeight: "bold" }}
                  >
                    Full Name:
                  </Typography>{" "}
                  {data.name}
                </Typography>
                <Typography variant="h6">
                  <Typography
                    component={"span"}
                    variant="span"
                    sx={{ fontWeight: "bold" }}
                  >
                    Country:
                  </Typography>{" "}
                  {data.country}
                </Typography>
                <Typography variant="h6">
                  <Typography
                    component={"span"}
                    variant="span"
                    sx={{ fontWeight: "bold" }}
                  >
                    Phone:
                  </Typography>{" "}
                  {data.phone}
                </Typography>
                <Typography variant="h6">
                  <Typography
                    component={"span"}
                    variant="span"
                    sx={{ fontWeight: "bold" }}
                  >
                    Email:
                  </Typography>{" "}
                  {data.email}
                </Typography>
                <Typography variant="body1">
                  <Typography
                    component={"span"}
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    About:
                  </Typography>{" "}
                  {data.about}
                </Typography>
              </Stack>
              <Stack direction={"row"} gap={"10px"}>
                <Button
                  sx={{
                    background: "#8a2be2",
                    color: "white",
                    ":hover": {
                      background: "#8a2be2",
                    },
                  }}
                  variant="contained"
                >
                  Download CV
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Layout>
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const team = context.params.teams;
  const data = await getTeamData(team);

  return { props: { data } };
}
