import React from 'react';
import { Box, Container, Typography, IconButton, Stack, SvgIcon } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme as useThemeMode } from '../context/ThemeContext';
import Logo from './Logo';

// Custom X (Twitter) Icon
const XIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </SvgIcon>
);

const Footer: React.FC = () => {
  const { mode } = useThemeMode();

  const socialLinks = [
    { icon: GitHubIcon, url: 'https://github.com/Nihar-2104' },
    { icon: LinkedInIcon, url: 'https://linkedin.com/in/nihar-patel-8a5375206/' },
    { icon: XIcon, url: 'https://x.com/yourusername' },
    { icon: InstagramIcon, url: 'https://instagram.com/nihar._.2104/' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: mode === 'dark'
          ? 'linear-gradient(180deg, #0a192f 0%, #112240 100%)'
          : 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: mode === 'dark'
            ? 'linear-gradient(90deg, rgba(100,255,218,0) 0%, rgba(100,255,218,0.3) 50%, rgba(100,255,218,0) 100%)'
            : 'linear-gradient(90deg, rgba(14,165,233,0) 0%, rgba(14,165,233,0.3) 50%, rgba(14,165,233,0) 100%)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            style={{ cursor: 'pointer' }}
            onClick={scrollToTop}
          >
            <Logo />
          </motion.div>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              '& a': {
                color: mode === 'dark' ? '#8892b0' : '#64748b',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                  transform: 'translateY(-3px)',
                },
              },
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <IconButton
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontSize: '1.5rem',
                  }}
                >
                  <social.icon />
                </IconButton>
              </motion.div>
            ))}
          </Stack>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Typography
              variant="body2"
              sx={{
                color: mode === 'dark' ? '#8892b0' : '#64748b',
                textAlign: 'center',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                background: mode === 'dark'
                  ? 'linear-gradient(45deg, #64ffda 30%, #8892b0 90%)'
                  : 'linear-gradient(45deg, #0ea5e9 30%, #64748b 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Designed & Built by Nihar Patel
            </Typography>
          </motion.div>

          <Typography
            variant="caption"
            sx={{
              color: mode === 'dark' ? '#8892b0' : '#64748b',
              opacity: 0.7,
              textAlign: 'center',
              fontFamily: 'monospace',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            © {new Date().getFullYear()} All rights reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer; 