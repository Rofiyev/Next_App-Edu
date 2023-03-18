import { Grid, Typography, Box, Stack, Avatar, Button } from "@mui/material";
import { Bar, Line } from "react-chartjs-2";
import userImage from "../../Image/userImage.png";
import { mainInfoCard } from "../../Data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const DashboardMain = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          sx={{
            boxShadow: "0.5px 0.5px 3px 0 rgb(200,200, 200, 0.7)",
            borderRadius: 2,
            p: 1,
          }}
        >
          <Typography sx={{ fontWeight: "bold", mb: 2 }}>
            Teams Strength
          </Typography>
          <Bar
            data={data?.teamsStrenght?.data}
            options={data?.teamsStrenght?.options}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          width={"100%"}
          height={"100%"}
          sx={{
            boxShadow: "0.5px 0.5px 3px 0 rgb(200,200, 200, 0.7)",
            borderRadius: 2,
            p: 1,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={2}
          >
            <Typography sx={{ fontWeight: "bold" }}>Employees</Typography>
            <Typography sx={{ fontWeight: "300", fontSize: "0.6rem" }}>
              {data?.employees?.date}
            </Typography>
          </Stack>
          <Stack p={1} direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"column"} gap={"11px"}>
              <Box>
                <Typography sx={{ color: "#999" }}>🟣 Inactive</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {data?.employees?.inactive}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#999" }}>🟡 Active</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {data?.employees?.active}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#999" }}>🟠 Total</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {data?.employees?.total}
                </Typography>
              </Box>
            </Stack>
            <Stack
              width={"100%"}
              height={"60%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                sx={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  background: "#fff",
                  ":before": {
                    content: "''",
                    position: "absolute",
                    top: "-4px",
                    bottom: "-4px",
                    right: "-4px",
                    left: "-4px",
                    zIndex: "-1",
                    borderRadius: "inherit",
                    background:
                      "linear-gradient(to bottom, #ffffff 22%, #F8C07F 90%)",
                  },
                  ":after": {
                    content: "''",
                    position: "absolute",
                    left: "2%",
                    top: "24%",
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    background: "#F8C07F",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    background:
                      "linear-gradient(to right, #ffffff 22%, #FB896B 90%)",
                    ":before": {
                      content: "''",
                      position: "absolute",
                      top: "5px",
                      bottom: "5px",
                      right: "5px",
                      left: "5px",
                      borderRadius: "inherit",
                      background: "#fff",
                    },
                    ":after": {
                      content: "''",
                      position: "absolute",
                      zIndex: "12",
                      left: "21%",
                      bottom: "4%",
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      background: "#FB896B",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      background:
                        "linear-gradient(to top, #ffffff 22%, #6956E5 90%)",
                      ":before": {
                        content: "''",
                        position: "absolute",
                        top: "5px",
                        bottom: "5px",
                        right: "5px",
                        left: "5px",
                        borderRadius: "inherit",
                        background: "#fff",
                      },
                      ":after": {
                        content: "''",
                        position: "absolute",
                        zIndex: "12",
                        right: "7%",
                        bottom: "13%",
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        background: "#6956E5",
                      },
                    }}
                  >
                    <Avatar src={userImage.src} alt="Icon-users" />
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          width={"100%"}
          height={"90%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
        >
          {mainInfoCard.map((item) => (
            <Stack
              key={item.text_2}
              direction={"column"}
              alignItems={"center"}
              sx={{ background: item.background, borderRadius: 1, p: 1 }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {item.text_1}
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                {item.text_2}
              </Typography>
              <Typography sx={{ color: "#787486", fontSize: "0.9rem" }}>
                {item.text_3}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          flexDirection={"column"}
          sx={{
            boxShadow: "3px 3px 20px 0 rgb(200,200, 200, 0.5)",
            borderRadius: 2,
            p: 2,
          }}
        >
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Typography sx={{ fontWeight: "bold", mb: 2 }}>
              Project Deliveries
            </Typography>
            <Stack direction={"row"} gap={"10px"}>
              <Typography sx={{ color: "#999" }}>🔴 Achieved</Typography>
              <Typography sx={{ color: "#999" }}>🟣 Target</Typography>
            </Stack>
          </Stack>
          <Line
            data={data?.projectDeliveries?.data}
            options={data?.projectDeliveries?.options}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
              Notifications
            </Typography>
            <Button
              sx={{
                color: "#6956E5",
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              View All
            </Button>
          </Stack>
          {data?.notification?.map((item, i) => (
            <Stack
              key={i}
              sx={{
                background: "#F9F9F9",
                py: 1,
                px: 1.5,
                borderRadius: 3,
                cursor: "pointer",
              }}
              direction={"row"}
              alignItems={"center"}
              gap={"10px"}
              mt={2}
            >
              <Avatar
                src={item.img?.src}
                variant="rounded"
                alt="users"
                sx={{ objectFit: "cover" }}
              />
              <Stack>
                <Typography sx={{ fontSize: "0.98rem" }}>
                  {item.heading}
                </Typography>
                <Typography sx={{ color: "#708099", fontSize: "0.85rem" }}>
                  {item.info}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default DashboardMain;
