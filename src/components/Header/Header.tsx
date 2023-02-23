import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavItems from "./NavItems";
import SearchBar from "./SearchBar";
import Collections from "./Collections";
import Categories from "./Categories";

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
      <AppBar
        component="nav"
        sx={{ background: "#fff", color: "#666565" }}
        elevation={0.5}
      >
        <Toolbar>
          <IconButton
            sx={{ color: "black" }}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            // sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: { xs: 1, sm: 0 },
              fontWeight: 900,
              marginX: 2,
              display: { sm: "block" },
            }}
          >
            Shopstore
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
              display: { sm: "flex", xs: "none", md: "flex" },
            }}
          >
            <SearchBar />
          </Box>
          <Box
            sx={{
              display: { sm: "flex", xs: "flex" },
              sm: { justifyContent: "flex-end" },
              md: { justifyContent: "flex-end" },
            }}
          >
            <NavItems />
          </Box>
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
              backgroundColor: "#fff",
              color: "#000",
            },
          }}
        >
          <Box onClick={handleDrawerToggle}>
            <Typography variant="h6" sx={{ m: 2, fontWeight: 900 }}>
              Shopstore
            </Typography>
            <Divider />
            <List>
              <Collections />
            </List>
            <Divider />
            <List>
              <Categories />
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
