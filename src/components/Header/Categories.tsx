import * as React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  CarRental,
  ChevronRight,
  Gamepad,
  Laptop,
  PhoneAndroid,
  Queue,
} from "@mui/icons-material";

const Categories = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#666565" }}>
            <Queue />
          </ListItemIcon>
          <ListItemText primary={"Categories"} />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#666565" }}>
            <CarRental />
          </ListItemIcon>
          <ListItemText primary={"Automobile"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#666565" }}>
            <PhoneAndroid />
          </ListItemIcon>
          <ListItemText primary={"Phones & Tablets"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#666565" }}>
            <Gamepad />
          </ListItemIcon>
          <ListItemText primary={"Gaming"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#666565" }}>
            <Laptop />
          </ListItemIcon>
          <ListItemText primary={"Computing"} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default Categories;
