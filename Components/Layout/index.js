import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Button, Stack } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { navbarData } from "../../Data";
import img from "../../Image/img.png";
import user from "../../Image/user.png";
import { useRouter } from "next/router";
import MyListItem from "./ListItem";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const router = useRouter();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          boxShadow: 0,
        }}
        position="fixed"
        open={open}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Stack direction={"column"}>
              <Typography
                fontWeight={"bold"}
                variant="h6"
                noWrap
                component="div"
              >
                Good Morning Anima
              </Typography>
              <Typography
                fontWeight={"400"}
                fontSize={"0.8rem"}
                component={"p"}
                variant="p"
                color={"silver"}
              >
                Hope you have a good day
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={"15px"}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"5px"}
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Avatar src={user.src} alt="User Profile Image" />
              <ExpandMoreIcon />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#F9F9F9",
          },
          position: "relative",
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 2,
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              letterSpacing: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#8A2BE2",
            }}
            component={"h3"}
            variant="h6"
          >
            <VerifiedIcon /> Teamify
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {navbarData.sidebar_1.map((item, i) => {
            if (item.text) {
              return (
                <MyListItem
                  key={i}
                  disablePadding
                  className={
                    (router.pathname.startsWith(item.path) &&
                      item.path !== "/") ||
                    router.pathname === item.path
                      ? "active"
                      : ""
                  }
                  onClick={() => router.push(item.path)}
                >
                  <ListItemButton
                    sx={{ ":hover": { backgroundColor: "transparent" } }}
                    disableRipple
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                  </ListItemButton>
                </MyListItem>
              );
            } else
              return (
                <Divider
                  key={i}
                  variant="middle"
                  sx={{ color: "#ccc", my: 1 }}
                />
              );
          })}
        </List>
        <Box
          sx={{
            position: "absolute",
            bottom: "2%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#ebeaf8",
            borderRadius: 2,
            width: "85%",
            height: "110px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            p: 2,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "45%",
              width: "80%",
              left: "50%",
              transform: "translateX(-50%)",
              height: "130px",
              backgroundImage: `url(${img.src})`,
              backgroundPosition: "center",
              filter:
                "invert(20%) sepia(42%) saturate(7212%) hue-rotate(237deg) brightness(92%) contrast(93%)",
              zIndex: "10",
              ":before": {
                content: "''",
                position: "absolute",
                left: "50%",
                bottom: "-5%",
                width: "88%",
                transform: "translateX(-50%)",
                height: "25%",
                background:
                  "linear-gradient(180deg, rgba(105, 86, 229, 0.2) 0%, rgba(196, 196, 196, 0) 100%)",
                clipPath: "polygon(15% 1%, 85% 0, 100% 100%, 0% 100%)",
              },
            }}
          ></Box>
          <Button
            sx={{
              textTransform: "capitalize",
              color: "blueviolet",
              whiteSpace: "nowrap",
              ":hover": { background: "#9c5cd8", color: "#fff" },
            }}
            variant="contained"
            disableRipple
          >
            Share Your Thoughts
          </Button>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
