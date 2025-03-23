import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,  
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Container,
  useTheme,
  useMediaQuery,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Code as CodeIcon,
  Work as WorkIcon,
  Chat as ChatIcon,
  Close as CloseIcon,
  School as SchoolIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { useTheme as useThemeMode } from '../context/ThemeContext';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home', icon: <HomeIcon /> },
  { label: 'About', href: '#about', icon: <PersonIcon /> },
  { label: 'Skills', href: '#skills', icon: <CodeIcon /> },
  { label: 'Experience', href: '#experience', icon: <SchoolIcon /> },
  { label: 'Projects', href: '#projects', icon: <WorkIcon /> },
  { label: 'Contact', href: '#contact', icon: <ChatIcon /> },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleTheme } = useThemeMode();
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (isMobile) {
      handleDrawerToggle();
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          background: mode === 'dark'
            ? 'linear-gradient(90deg, rgba(10, 25, 47, 0.85) 0%, rgba(17, 34, 64, 0.85) 100%)'
            : 'linear-gradient(90deg, rgba(248, 250, 252, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #64ffda, transparent)',
            opacity: trigger ? 1 : 0,
            transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          boxShadow: trigger 
            ? mode === 'dark'
              ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
              : '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
            : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            disableGutters 
            sx={{ 
              height: 80,
              transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo onClick={() => scrollToSection('#home')} />
            </motion.div>

            <Box sx={{ flexGrow: 1 }} />

            {!isMobile && (
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                sx={{ display: 'flex', gap: 2 }}
              >
                {navItems.map((item, index) => (
                  <Button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      color: activeSection === item.href.substring(1)
                        ? 'primary.main'
                        : 'text.primary',
                      position: 'relative',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: activeSection === item.href.substring(1) ? '100%' : '0%',
                        height: '2px',
                        bottom: 0,
                        left: '0',
                        background: 'linear-gradient(90deg, #64ffda, #0ea5e9)',
                        transition: 'all 0.3s ease-in-out',
                        opacity: activeSection === item.href.substring(1) ? 1 : 0,
                      },
                      '&:hover::after': {
                        width: '100%',
                        opacity: 1,
                      },
                    }}
                    startIcon={item.icon}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
              <IconButton
                onClick={toggleTheme}
                sx={{
                  ml: 2,
                  color: 'text.primary',
                  transition: 'all 0.3s ease-in-out',
                  background: mode === 'dark' 
                    ? 'linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(14, 165, 233, 0.1))'
                    : 'linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(14, 165, 233, 0.2))',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'rotate(180deg)',
                    background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(14, 165, 233, 0.2))',
                  },
                }}
              >
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  ml: 2,
                  transition: 'all 0.3s ease-in-out',
                  background: mode === 'dark' 
                    ? 'linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(14, 165, 233, 0.1))'
                    : 'linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(14, 165, 233, 0.2))',
                  '&:hover': {
                    color: 'primary.main',
                    background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(14, 165, 233, 0.2))',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar 
        sx={{ 
          height: 80,
          transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }} 
      />

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            background: theme.palette.background.paper,
            borderLeft: `1px solid ${theme.palette.divider}`,
            backgroundImage: mode === 'dark'
              ? 'linear-gradient(135deg, rgba(10, 25, 47, 0.95), rgba(17, 34, 64, 0.95))'
              : 'linear-gradient(135deg, rgba(248, 250, 252, 0.95), rgba(255, 255, 255, 0.95))',
          },
        }}
      >
        <Box sx={{ textAlign: 'right', p: 1 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem
              component="button"
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              sx={{
                color: activeSection === item.href.substring(1)
                  ? 'primary.main'
                  : 'text.primary',
                width: '100%',
                textAlign: 'left',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <Box component="span" sx={{ mr: 2 }}>
                {item.icon}
              </Box>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <ListItem>
            <Button
              fullWidth
              onClick={toggleTheme}
              startIcon={mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            >
              {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar; 