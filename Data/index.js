import GridViewIcon from "@mui/icons-material/GridView";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import CallIcon from "@mui/icons-material/Call";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";

export const navbarData = {
  sidebar_1: [
    {
      icon: <GridViewIcon />,
      text: "Dashboard",
      path: "/",
    },
    {
      icon: <GroupsIcon />,
      text: "Employees",
      path: "/employees",
    },
    {
      icon: <PeopleAltIcon />,
      text: "Teams",
      path: "/teams",
    },
    {
      icon: <HomeRepairServiceIcon />,
      text: "Projects",
      path: "/projects",
    },
    {
      text: "",
    },
    {
      icon: <CallIcon />,
      text: "Mettings",
      path: "/mettings",
    },
    {
      icon: <FolderIcon />,
      text: "Tasks",
      path: "/tasks",
    },
    {
      icon: <SettingsIcon />,
      text: "Settings",
      path: "/settings",
    },
  ],
};
export const mainInfoCard = [
  {
    background: "#FFF0E6",
    text_1: "Top 10",
    text_2: "Position in dribbble",
    text_3: "20% Increase from Last Week",
  },
  {
    background: "#ECEAFE",
    text_1: "26",
    text_2: "New employees onboarded",
    text_3: "15% Increase from Last Month",
  },
  {
    background: "#E5F7FF",
    text_1: "500",
    text_2: "New Clients Approached",
    text_3: "5% Increase from Last Week",
  },
];
