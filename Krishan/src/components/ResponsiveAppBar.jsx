import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
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

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(14, 31, 29, 0.9)', // Semi-transparent dark background
        backdropFilter: 'blur(10px)', // Glass morphism effect
        boxShadow: '0 4px 20px rgba(0, 255, 136, 0.2)', // Subtle neon shadow
        borderBottom: '1px solid rgba(0, 255, 136, 0.1)', // Neon border
      }}
    >
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
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white', // White text
              textDecoration: 'none',
              '&:hover': {
                opacity: 0.8, // Subtle hover effect
              },
            }}
          >
            <img
              src={logo}
              alt="Krishan Logo"
              style={{ width: '103px', height: '36px' }}
            />
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }} // White color for the menu icon
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
              sx={{
                display: { xs: 'block', md: 'none' },
                backdropFilter: 'blur(10px)', // Glass morphism effect
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                  sx={{
                    color: 'white', // White text
                    '&:hover': {
                      backgroundColor: 'rgba(0, 255, 136, 0.1)', // Subtle hover effect
                    },
                  }}
                >
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
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white', // White text
              textDecoration: 'none',
              '&:hover': {
                opacity: 0.8, // Subtle hover effect
              },
            }}
          >
            <img
              src={logo}
              alt="Krishan Logo"
              style={{ width: '103px', height: '36px' }}
            />
          </Typography>

          {/* Pages for Desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center', // Center the pages horizontally
              gap: 2, // Add spacing between buttons
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link} // Use Link for navigation
                to={page.path} // Link to the respective page
                sx={{
                  color: 'white', // White text
                  fontFamily: 'Poppins',
                  textTransform: 'none', // Disable uppercase transformation
                  fontSize: '1rem', // Slightly larger font size
                  '&:hover': {
                    backgroundColor: 'rgba(0, 255, 136, 0.1)', // Subtle hover effect
                    boxShadow: '0 0 10px rgba(0, 255, 136, 0.2)', // Neon glow on hover
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Rightmost Login and Sign Up Buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', flexGrow: 0 }}>
            <Button
              component={Link} // Use Link for navigation
              to="/login" // Link to the login page
              sx={{
                color: 'white', // White text
                border: '1px solid #00ff88', // Neon green border
                fontFamily: 'Poppins',
                textTransform: 'none', // Disable uppercase transformation
                fontSize: '1rem', // Slightly larger font size
                '&:hover': {
                  backgroundColor: '#00ff88', // Neon green background on hover
                  color: '#0a1f1d', // Dark text on hover
                  boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)', // Neon glow on hover
                },
              }}
            >
              Log in
            </Button>
            <Button
              component={Link} // Use Link for navigation
              to="/signup" // Link to the signup page
              sx={{
                color: 'white', // White text
                border: '1px solid #00ff88', // Neon green border
                fontFamily: 'Poppins',
                textTransform: 'none', // Disable uppercase transformation
                fontSize: '1rem', // Slightly larger font size
                '&:hover': {
                  backgroundColor: '#00ff88', // Neon green background on hover
                  color: '#0a1f1d', // Dark text on hover
                  boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)', // Neon glow on hover
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;