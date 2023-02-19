import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavItems from "./NavItems";
import SearchBar from "./Search";
import { Button, Avatar } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact", "Login/Register"];
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen((prevState: boolean) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "green" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginX: 2, display: { sm: "block" } }}
          >
            Shopstore
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { sm: "none", xs: "none", md: "flex" },
            }}
          >
            <SearchBar />
          </Box>
          <Box
            sx={{
              display: { sm: "flex", xs: "none", md: "flex" },
              flexGrow: 1,
            }}
          >
            <NavItems />
          </Box>
          <Button>
            <Avatar
              alt="Babatunde Adebayo"
              src="https//unsplash.com/3"
              sx={{ color: "white" }}
            />
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToggle}>
            <Typography variant="h6">Shopstore</Typography>
            <Divider />
            <List>
              <ListItemButton>
                <ListItemText primary={"Collections"} />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemText primary={"Shoes"} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={"Bags"} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={"For Men"} />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
