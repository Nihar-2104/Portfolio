import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import FuturisticProfile from './FuturisticProfile';
import { mobileSpacing, responsiveText } from '../utils/responsive';
import { useTheme as useThemeMode } from '../context/ThemeContext';

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode } = useThemeMode();

  return (
    <Box
      id="about"
      sx={{
        background: mode === 'dark'
          ? 'linear-gradient(180deg, rgba(17,34,64,0.8) 0%, rgba(10,25,47,1) 100%)'
          : 'linear-gradient(180deg, rgba(248,250,252,0.8) 0%, rgba(255,255,255,1) 100%)',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        ...mobileSpacing.section,
      }}
    >
      {/* Top partition line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, rgba(100,255,218,0) 0%, rgba(100,255,218,0.3) 50%, rgba(100,255,218,0) 100%)',
          boxShadow: mode === 'dark'
            ? '0 0 10px rgba(100,255,218,0.2)'
            : '0 0 10px rgba(100,255,218,0.3)',
          zIndex: 1,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      <Container maxWidth="lg" sx={mobileSpacing.container}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box sx={{ width: '100%', maxWidth: { xs: '280px', sm: '320px', md: '400px' } }}>
                <FuturisticProfile />
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                align={isMobile ? "center" : "left"}
                sx={{
                  mb: { xs: 4, md: 6 },
                  ...responsiveText.h2,
                  fontWeight: 700,
                  position: 'relative',
                  background: 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&::before': {
                    content: '"<"',
                    background: 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: mode === 'dark' ? 0.4 : 0.6,
                    position: 'absolute',
                    right: isMobile ? '85%' : '102%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                  '&::after': {
                    content: '"/>"',
                    background: 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: mode === 'dark' ? 0.4 : 0.6,
                    position: 'absolute',
                    left: isMobile ? '85%' : '102%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }
                }}
              >
                About Me
              </Typography>

              <Typography
                variant="body1"
                align={isMobile ? "center" : "left"}
                sx={{
                  color: mode === 'dark' ? '#8892b0' : '#64748b',
                  mb: { xs: 2, md: 3 },
                  ...responsiveText.body1,
                  maxWidth: isMobile ? '100%' : '90%',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                I help business owners and busy web developers to design & develop creative websites 
                that fits their vision and attracts the visitors to stay forever. My approach combines 
                technical expertise with creative problem-solving to deliver exceptional results.
              </Typography>

              <Typography
                variant="body1"
                align={isMobile ? "center" : "left"}
                sx={{
                  color: mode === 'dark' ? '#8892b0' : '#64748b',
                  mb: { xs: 3, md: 4 },
                  ...responsiveText.body1,
                  maxWidth: isMobile ? '100%' : '90%',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                With a strong foundation in modern web technologies and a passion for creating 
                seamless user experiences, I bring ideas to life through clean, efficient code 
                and thoughtful design decisions.
              </Typography>

              <Grid 
                container 
                spacing={{ xs: 1.5, sm: 2 }} 
                justifyContent={isMobile ? "center" : "flex-start"}
              >
                {['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js'].map((tech, index) => (
                  <Grid item key={index}>
                    <Paper
                      component={motion.div}
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        px: { xs: 1.5, sm: 2 },
                        py: { xs: 0.75, sm: 1 },
                        bgcolor: mode === 'dark'
                          ? 'rgba(100,255,218,0.05)'
                          : 'rgba(100,255,218,0.1)',
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: '#64ffda',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          bgcolor: mode === 'dark'
                            ? 'rgba(100,255,218,0.1)'
                            : 'rgba(100,255,218,0.15)',
                          boxShadow: mode === 'dark'
                            ? '0 4px 20px rgba(100,255,218,0.1)'
                            : '0 4px 20px rgba(100,255,218,0.2)',
                        }
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: '#64ffda',
                          fontFamily: 'monospace',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                          fontWeight: 500,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        {tech}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom partition line */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, rgba(100,255,218,0) 0%, rgba(100,255,218,0.3) 50%, rgba(100,255,218,0) 100%)',
          boxShadow: mode === 'dark'
            ? '0 0 10px rgba(100,255,218,0.2)'
            : '0 0 10px rgba(100,255,218,0.3)',
          zIndex: 1,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Decorative circle */}
      <Box
        sx={{
          position: 'absolute',
          width: { xs: '200px', md: '300px' },
          height: { xs: '200px', md: '300px' },
          borderRadius: '50%',
          background: mode === 'dark'
            ? 'radial-gradient(circle, rgba(100,255,218,0.1) 0%, rgba(10,25,47,0) 70%)'
            : 'radial-gradient(circle, rgba(100,255,218,0.15) 0%, rgba(248,250,252,0) 70%)',
          bottom: { xs: '-100px', md: '-150px' },
          left: { xs: '-100px', md: '-150px' },
          zIndex: 0,
          opacity: { xs: 0.5, md: 1 },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </Box>
  );
};

export default About;