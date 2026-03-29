import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar
} from "@mui/material";
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon, Menu as MenuIcon } from "@mui/icons-material";

const drawerWidth = 240;
const navItems = [
  ['Skills', 'expertise'],
  ['About', 'history'],
  ['Projects', 'projects'],
  ['Contact', 'contact']
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        setScrolled(window.scrollY > navbar.clientHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const drawer = (
    <Box
      onClick={() => setMobileOpen(false)}
      sx={{
        textAlign: "center",
        backgroundColor: mode === 'dark' ? "#1a1a1a" : "#fff",
        height: "100%"
      }}
    >
      <Box sx={{ my: 2, fontWeight: 600, fontSize: "1.2rem" }}>Menu</Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(item[1])}
              sx={{
                textAlign: "center",
                transition: "0.2s",
                "&:hover": {
                  backgroundColor: mode === 'dark' ? "#333" : "#f0f0f0"
                }
              }}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        sx={{
          transition: "0.3s",
          backgroundColor: scrolled
            ? mode === 'dark' ? "#111" : "#fafafa"
            : mode === 'dark' ? "transparent" : "rgba(255,255,255,0.8)",
          color: mode === 'dark' ? "#fff" : "#333",
          boxShadow: scrolled ? 1 : 0,
          backdropFilter: scrolled ? "blur(10px)" : "none"
        }}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item[0]}
                  onClick={() => scrollToSection(item[1])}
                  sx={{
                    color: mode === 'dark' ? "#fff" : "#333",
                    textTransform: "none",
                    fontWeight: 500,
                    transition: "0.2s",
                    "&:hover": {
                      opacity: 0.7
                    }
                  }}
                >
                  {item[0]}
                </Button>
              ))}
            </Box>
          </Box>
          <IconButton color="inherit" onClick={modeChange}>
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth
          }
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Navigation;