import { ListItem } from "@mui/material";
import { styled } from "@mui/system";

const MyListItem = styled(ListItem)(({ theme }) => ({
  "&:hover svg": {
    color: "#8a2be2",
  },
  "&:hover span": {
    color: "#8a2be2",
  },
  "&.active svg, &.active span": {
    color: "#8a2be2",
  },
}));

export default MyListItem;
