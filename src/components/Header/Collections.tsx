import * as React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Apple,
  ChevronRight,
  CollectionsBookmark,
  House,
  Tv,
} from "@mui/icons-material";

const Collections = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#666565" }}>
            <CollectionsBookmark />
          </ListItemIcon>
          <ListItemText primary={"Collections"} />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#666565" }}>
            <Apple />
          </ListItemIcon>
          <ListItemText primary={"Supermarket"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#666565" }}>
            <Tv />
          </ListItemIcon>
          <ListItemText primary={"Electronics"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#666565" }}>
            <House />
          </ListItemIcon>
          <ListItemText primary={"Home & Office"} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default Collections;
