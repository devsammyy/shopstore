import React from "react";
import { Mail, Notifications, ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, Box } from "@mui/material";
import Button from "@mui/material/Button";

const NavItems = () => {
  return (
    <>
      <Button sx={{ display: { xs: "none", sm: "block" } }}>
        <Badge badgeContent={4} color="error">
          <Notifications sx={{ color: "white" }} />
        </Badge>
      </Button>
      <Button sx={{ display: { sm: "block", xs: "none", md: "block" } }}>
        <Badge badgeContent={4} color="error">
          <Mail sx={{ color: "white" }} />
        </Badge>
      </Button>
      <Button>
        <Badge badgeContent={0} color="error">
          <ShoppingCart sx={{ color: "white" }} />
        </Badge>
      </Button>
      <Button>
        <Avatar
          alt="Babatunde Adebayo"
          src="https//unsplash.com/3"
          sx={{ color: "white" }}
        />
      </Button>
    </>
  );
};

export default NavItems;
