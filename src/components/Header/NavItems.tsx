import React from "react";
import { ChatRounded, Notifications, ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, Box } from "@mui/material";
import Button from "@mui/material/Button";

const NavItems = () => {
  return (
    <>
      <Button>
        <Badge badgeContent={4} color="error">
          <Notifications sx={{ color: "white" }} />
        </Badge>
      </Button>
      <Button>
        <Badge badgeContent={0} color="error">
          <ShoppingCart sx={{ color: "white" }} />
        </Badge>
      </Button>
      <Button>
        <Badge badgeContent={0} color="error">
          <ChatRounded sx={{ color: "white" }} />
        </Badge>
      </Button>
    </>
  );
};

export default NavItems;
