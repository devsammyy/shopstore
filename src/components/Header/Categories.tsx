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
          <ListItemIcon sx={{ color: "white" }}>
            <Queue />
          </ListItemIcon>
          <ListItemText primary={"Categories"} />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <CarRental />
          </ListItemIcon>
          <ListItemText primary={"Automobile"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <PhoneAndroid />
          </ListItemIcon>
          <ListItemText primary={"Phones & Tablets"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <Gamepad />
          </ListItemIcon>
          <ListItemText primary={"Gaming"} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <Laptop />
          </ListItemIcon>
          <ListItemText primary={"Computing"} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default Categories;
