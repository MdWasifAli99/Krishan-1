import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../images/KrishanLogo.png';

// Define pages and settings
const pages = [
  { name: 'Features', path: '/features' },
  { name: 'Krishan Bazer', path: '/krishanbazer' },
  { name: 'Insights', path: '/insights' },
  { name: 'Weather', path: '/weather' },
  { name: 'Advice', path: '/advice' },
  { name: 'Community', path: '/community' },
  { name: 'About Us', path: '/about-us' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem('token'); // Check for token in local storage

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    window.location.reload(); // Refresh the page to update the UI
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#effdee' }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {/* Logo and Title for Desktop */}
          <Typography
            variant="h6"
            noWrap
            component={Link} // Use Link for navigation
            to="/" // Link to the home page
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="Krishan Logo" style={{ width: '103px', height: '36px' }} />
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#ffffff"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo and Title for Mobile */}
          <Typography
            variant="h5"
            noWrap
            component={Link} // Use Link for navigation
            to="/" // Link to the home page
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="Krishan Logo" style={{ width: '103px', height: '36px' }} />
          </Typography>

          {/* Pages for Desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center', // Center the pages horizontally
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link} // Use Link for navigation
                to={page.path} // Link to the respective page
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  fontFamily: 'Poppins', // Change font to Poppins
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Conditional Rendering Based on Login State */}
          {isLoggedIn ? (
            // User Settings (Logged In)
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            // Log in and Sign Up Buttons (Not Logged In)
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', flexGrow: 0 }}>
              <Button
                component={Link} // Use Link for navigation
                to="/login" // Link to the login page
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  border: '1px solid green',
                  backgroundColor: 'transparent', // Transparent background
                  fontFamily: 'Poppins', // Font for the button
                  '&:hover': {
                    color: 'white',
                    backgroundColor: '#377842', // Add hover effect
                  },
                }}
              >
                Log in
              </Button>
              <Button
                component={Link} // Use Link for navigation
                to="/signup" // Link to the signup page
                sx={{
                  my: 2,
                  color: 'black',
                  display: '',
                  border: '1px solid green',
                  backgroundColor: 'transparent', // Transparent background
                  fontFamily: 'Poppins', // Font for the button
                  '&:hover': {
                    color: 'white',
                    backgroundColor: '#377842', // Add hover effect
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;