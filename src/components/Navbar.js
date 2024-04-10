// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#049cac' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="h6" component="div">
              Roman Urdu Quran
            </Typography>
          </Link>
          <div sx={{ display: 'flex', gap: 2 }}>
            {!isMobile && (
              <>
                <Link to="/random-verse" style={{ textDecoration: 'none', color: 'white' }}>
                  <Typography variant="h6">Random Verse</Typography>
                </Link>
                <Link to="/search-by-key" style={{ textDecoration: 'none', color: 'white' }}>
                  <Typography variant="h6">Search by Key</Typography>
                </Link>
              </>
            )}
          </div>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ backgroundColor: '#049cac', display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer} sx={{ backgroundColor: '#049cac' }}>
        <List>
          <ListItem button component={Link} to="/random-verse" onClick={closeDrawer}>
            <ListItemText primary="Random Verse" />
          </ListItem>
          <ListItem button component={Link} to="/search-by-key" onClick={closeDrawer}>
            <ListItemText primary="Search by Key" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
