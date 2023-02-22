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
          <ListItemIcon sx={{ color: "#000" }}>
            <Queue />
          </ListItemIcon>
          <ListItemText primary={"Categories"} />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#000" }}>
            <CarRental />
          </ListItemIcon>
          <ListItemText primary={"Automobile"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#000" }}>
            <PhoneAndroid />
          </ListItemIcon>
          <ListItemText primary={"Phones & Tablets"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#000" }}>
            <Gamepad />
          </ListItemIcon>
          <ListItemText primary={"Gaming"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#000" }}>
            <Laptop />
          </ListItemIcon>
          <ListItemText primary={"Computing"} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default Categories;
