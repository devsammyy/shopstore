import React from "react";
import { Mail, Notifications, ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const NavItems = () => {
  const counter = useSelector((state: any) => state.counter.value);

  return (
    <>
      <Button sx={{ display: { xs: "none", sm: "block" } }}>
        <Badge badgeContent={0} color="error">
          <Notifications sx={{ color: "#4e4e4e" }} />
        </Badge>
      </Button>
      <Button sx={{ display: { sm: "block", xs: "none", md: "block" } }}>
        <Badge badgeContent={0} color="error">
          <Mail sx={{ color: "#4e4e4e" }} />
        </Badge>
      </Button>
      <Button>
        <Badge badgeContent={counter} color="error">
          <ShoppingCart sx={{ color: "#4e4e4e" }} />
        </Badge>
      </Button>
      <Button>
        <Avatar
          alt="Babatunde Adebayo"
          src="https//unsplash.com/3"
          sx={{ color: "#4e4e4e" }}
        />
      </Button>
    </>
  );
};

export default NavItems;
