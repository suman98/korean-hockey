import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  useTheme,
  Badge,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Shop', path: '/shop' },
  { title: 'Sell', path: '/sell' },
  { title: 'Contact', path: '/contact' },
];

const userMenuItems = [
  { title: 'Profile', path: '/profile' },
  { title: 'My Orders', path: '/orders' },
  { title: 'Settings', path: '/settings' },
  { title: 'Logout', path: '/logout' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ 
      backgroundColor: 'white', 
      color: 'black',
      boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: '70px', md: '80px' } }}>
          {/* Logo for desktop */}
          <SportsHockeyIcon sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            mr: 1,
            color: 'primary.main',
            fontSize: '2rem'
          }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'system-ui',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.dark',
              }
            }}
          >
           @ndrew KOREAN HOCKEY
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'primary.main' }}
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
                '& .MuiPaper-root': {
                  borderRadius: '8px',
                  marginTop: '8px',
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.path);
                }}
                sx={{ 
                  py: 1.5,
                  px: 3,
                  '&:hover': {
                    backgroundColor: 'primary.light'
                  }
                }}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <SportsHockeyIcon sx={{ 
            display: { xs: 'flex', md: 'none' }, 
            mr: 1,
            color: 'primary.main' 
          }} />
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'system-ui',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.dark',
              }
            }}
          >
            KH
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ 
                  px: 2,
                  color: 'text.primary',
                  fontWeight: 500,
                  position: 'relative',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'transparent',
                    '&::after': {
                      width: '100%'
                    }
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '8px',
                    left: 0,
                    width: 0,
                    height: '2px',
                    backgroundColor: 'primary.main',
                    transition: 'width 0.3s ease'
                  }
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Cart and User menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="primary">
              <Badge badgeContent={3} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            
            <Tooltip title="Account settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.5 }}>
                <Avatar 
                  alt="User" 
                  src="/static/images/avatar/2.jpg"
                  sx={{ 
                    width: 40, 
                    height: 40,
                    border: '2px solid',
                    borderColor: 'primary.main'
                  }} 
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ 
                mt: '45px',
                '& .MuiPaper-root': {
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  minWidth: '200px'
                }
              }}
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
              {userMenuItems.map((item) => (
                <MenuItem key={item.title} onClick={() => {
                  handleCloseUserMenu();
                  navigate(item.path);
                }}
                sx={{
                  py: 1.5,
                  px: 3,
                  '&:hover': {
                    backgroundColor: 'primary.light'
                  }
                }}>
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;