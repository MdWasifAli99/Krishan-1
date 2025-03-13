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
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../images/KrishanLogo.png';

// Define pages
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
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Replace with actual authentication logic

  const settings = ['Profile', 'Dashboard', 'Logout'];

  // Handlers for opening/closing menus
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    console.log('User logged out'); // Replace with actual logout logic
    setIsLoggedIn(false);
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
          {/* Logo for Desktop */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              '&:hover': { opacity: 0.8 },
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
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, backdropFilter: 'blur(10px)' }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                  sx={{
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(0, 255, 136, 0.3)' },
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for Mobile */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              '&:hover': { opacity: 0.8 },
            }}
          >
            <img src={logo} alt="Krishan Logo" style={{ width: '103px', height: '36px' }} />
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  color: 'white',
                  fontFamily: 'Poppins',
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    boxShadow: '0 0 10px rgba(0, 255, 136, 0.2)',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* User Authentication Controls */}
          {isLoggedIn ? (
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
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', flexGrow: 0 }}>
              <Button component={Link} to="/login" sx={{ color: 'white', border: '1px solid #00ff88', fontFamily: 'Poppins', textTransform: 'none', fontSize: '1rem', '&:hover': { backgroundColor: '#00ff88', color: '#0a1f1d', boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)' } }}>Log in</Button>
              <Button component={Link} to="/signup" sx={{ color: 'white', border: '1px solid #00ff88', fontFamily: 'Poppins', textTransform: 'none', fontSize: '1rem', '&:hover': { backgroundColor: '#00ff88', color: '#0a1f1d', boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)' } }}>Sign Up</Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
