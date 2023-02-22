import React from "react";
import { Mail, Notifications, ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, Box } from "@mui/material";
import Button from "@mui/material/Button";

const NavItems = () => {
  return (
    <>
      <Button sx={{ display: { xs: "none", sm: "block" } }}>
        <Badge badgeContent={4} color="error">
          <Notifications sx={{ color: "#000" }} />
        </Badge>
      </Button>
      <Button sx={{ display: { sm: "block", xs: "none", md: "block" } }}>
        <Badge badgeContent={4} color="error">
          <Mail sx={{ color: "#000" }} />
        </Badge>
      </Button>
      <Button>
        <Badge badgeContent={0} color="error">
          <ShoppingCart sx={{ color: "#000" }} />
        </Badge>
      </Button>
      <Button>
        <Avatar
          alt="Babatunde Adebayo"
          src="https//unsplash.com/3"
          sx={{ color: "#000" }}
        />
      </Button>
    </>
  );
};

export default NavItems;
