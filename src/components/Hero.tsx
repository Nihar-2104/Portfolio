import React from 'react';
import { Box, Container, Typography, Button, Grid, GlobalStyles, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import heroIllustration from '../assets/images/hero-illustration.svg';
import { mobileSpacing, responsiveText } from '../utils/responsive';
import { useTheme as useThemeMode } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode } = useThemeMode();

  return (
    <>
      <GlobalStyles
        styles={{
          '*::-webkit-scrollbar': {
            width: '10px',
          },
          '*::-webkit-scrollbar-track': {
            background: mode === 'dark' ? '#0a192f' : '#f8fafc',
          },
          '*::-webkit-scrollbar-thumb': {
            background: mode === 'dark'
              ? 'linear-gradient(180deg, #64ffda 0%, #0a192f 100%)'
              : 'linear-gradient(180deg, #64ffda 0%, #f8fafc 100%)',
            borderRadius: '5px',
            border: `2px solid ${mode === 'dark' ? '#0a192f' : '#f8fafc'}`,
            '&:hover': {
              background: mode === 'dark'
                ? 'linear-gradient(180deg, #64ffda 30%, #0a192f 90%)'
                : 'linear-gradient(180deg, #64ffda 30%, #f8fafc 90%)',
            },
          },
        }}
      />
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: mode === 'dark'
            ? 'linear-gradient(135deg, #0a192f 0%, #112240 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: '80px', md: 0 },
          pb: { xs: '40px', md: 0 },
          ...mobileSpacing.section,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: mode === 'dark'
              ? 'radial-gradient(circle at 50% 50%, rgba(100,255,218,0.1) 0%, rgba(10,25,47,0) 50%)'
              : 'radial-gradient(circle at 50% 50%, rgba(100,255,218,0.15) 0%, rgba(248,250,252,0) 50%)',
            pointerEvents: 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        }}
      >
        {/* Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '300px', md: '600px' },
            height: { xs: '300px', md: '600px' },
            borderRadius: '50%',
            background: mode === 'dark'
              ? 'radial-gradient(circle, rgba(100,255,218,0.03) 0%, rgba(10,25,47,0) 70%)'
              : 'radial-gradient(circle, rgba(100,255,218,0.08) 0%, rgba(248,250,252,0) 70%)',
            top: { xs: '-150px', md: '-300px' },
            right: { xs: '-150px', md: '-300px' },
            zIndex: 0,
            animation: 'pulse 8s ease-in-out infinite',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        
        <Container maxWidth="lg" sx={mobileSpacing.container}>
          <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
            <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: { xs: 1, md: 2 },
                    fontWeight: 500,
                    background: mode === 'dark'
                      ? 'linear-gradient(45deg, #64ffda 0%, #8892b0 100%)'
                      : 'linear-gradient(45deg, #64ffda 0%, #1e293b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'monospace',
                    ...responsiveText.subtitle1,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Hi, I'm
                </Typography>
                
                <Typography
                  variant="h1"
                  sx={{
                    mb: { xs: 1, md: 2 },
                    fontWeight: 700,
                    background: mode === 'dark'
                      ? 'linear-gradient(45deg, #64ffda 30%, #e6f1ff 50%, #8892b0 70%)'
                      : 'linear-gradient(45deg, #64ffda 30%, #1e293b 50%, #64748b 70%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: mode === 'dark'
                      ? '0 0 40px rgba(100,255,218,0.1)'
                      : '0 0 40px rgba(100,255,218,0.2)',
                    position: 'relative',
                    ...responsiveText.h1,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: { xs: '40px', md: '60px' },
                      height: { xs: '3px', md: '4px' },
                      background: 'linear-gradient(90deg, #64ffda 0%, rgba(100,255,218,0) 100%)',
                      borderRadius: '2px',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                  }}
                >
                  Nihar Patel
                </Typography>
                
                <Typography
                  variant="h2"
                  sx={{
                    mb: { xs: 2, md: 3 },
                    background: mode === 'dark'
                      ? 'linear-gradient(45deg, #8892b0 30%, #e6f1ff 90%)'
                      : 'linear-gradient(45deg, #64748b 30%, #1e293b 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600,
                    ...responsiveText.h2,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Software Engineer
                </Typography>
                
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: { xs: 3, md: 4 },
                    maxWidth: '600px',
                    color: mode === 'dark' ? '#8892b0' : '#64748b',
                    ...responsiveText.subtitle1,
                    position: 'relative',
                    pl: { xs: 3, md: 4 },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '12px',
                      width: { xs: '15px', md: '20px' },
                      height: '2px',
                      backgroundColor: '#64ffda',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                  }}
                >
                  I specialize in building exceptional digital experiences. Currently, I'm focused on
                  building responsive web applications using modern technologies.
                </Typography>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size={isMobile ? "medium" : "large"}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderWidth: { xs: 1.5, md: 2 },
                      borderColor: '#64ffda',
                      color: '#64ffda',
                      ...responsiveText.button,
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: mode === 'dark'
                          ? 'rgba(100,255,218,0.1)'
                          : 'rgba(100,255,218,0.15)',
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover': {
                        borderWidth: { xs: 1.5, md: 2 },
                        borderColor: '#64ffda',
                        backgroundColor: 'transparent',
                        transform: 'translateY(-2px)',
                        boxShadow: mode === 'dark'
                          ? '0 4px 20px rgba(100,255,218,0.2)'
                          : '0 4px 20px rgba(100,255,218,0.3)',
                        '&::before': {
                          transform: 'translateX(0)',
                        },
                      },
                      '& .MuiButton-endIcon': {
                        ml: 1,
                        transition: 'transform 0.2s',
                        fontSize: responsiveText.icon.size,
                      },
                      '&:hover .MuiButton-endIcon': {
                        transform: 'translateX(4px)',
                      },
                    }}
                    href="#projects"
                  >
                    View My Work
                  </Button>
                </motion.div>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
              <motion.div
                className="float"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  position: 'relative',
                }}
              >
                <Box
                  component="img"
                  src={heroIllustration}
                  alt="Developer Illustration"
                  sx={{
                    width: '100%',
                    maxWidth: { xs: '280px', sm: '400px', md: '500px' },
                    filter: mode === 'dark'
                      ? 'drop-shadow(0 0 30px rgba(100,255,218,0.3))'
                      : 'drop-shadow(0 0 30px rgba(100,255,218,0.4))',
                    animation: 'float 6s ease-in-out infinite',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '@keyframes float': {
                      '0%, 100%': {
                        transform: 'translateY(0px) scale(1)',
                      },
                      '50%': {
                        transform: 'translateY(-20px) scale(1.02)',
                      },
                    },
                    '&:hover': {
                      filter: mode === 'dark'
                        ? 'drop-shadow(0 0 40px rgba(100,255,218,0.4))'
                        : 'drop-shadow(0 0 40px rgba(100,255,218,0.5))',
                      animation: 'none',
                      transform: 'scale(1.05)',
                      transition: 'all 0.3s ease-in-out',
                    },
                  }}
                />
                
                {/* Tech Stack Floating Elements */}
                {['React', 'Node.js', 'MongoDB', 'TypeScript'].map((tech, index) => (
                  <Box
                    key={tech}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                    sx={{
                      position: 'absolute',
                      padding: { xs: '6px 12px', md: '8px 16px' },
                      background: mode === 'dark'
                        ? 'rgba(17, 34, 64, 0.9)'
                        : 'rgba(248, 250, 252, 0.9)',
                      borderRadius: '20px',
                      border: { xs: '1.5px solid #64ffda', md: '2px solid #64ffda' },
                      color: '#64ffda',
                      fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                      fontFamily: 'monospace',
                      whiteSpace: 'nowrap',
                      boxShadow: mode === 'dark'
                        ? '0 4px 20px rgba(100,255,218,0.2)'
                        : '0 4px 20px rgba(100,255,218,0.3)',
                      display: { xs: index > 2 ? 'none' : 'block', md: 'block' },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      ...getPositionForIndex(index, isMobile),
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

const getPositionForIndex = (index: number, isMobile: boolean) => {
  const mobilePositions = [
    { top: '0%', right: '0%' },
    { top: '40%', left: '0%' },
    { bottom: '10%', right: '0%' },
    { bottom: '30%', left: '0%' },
  ];

  const desktopPositions = [
    { top: '10%', right: '-10%' },
    { top: '30%', left: '-15%' },
    { bottom: '20%', right: '-5%' },
    { bottom: '40%', left: '-10%' },
  ];

  return isMobile ? mobilePositions[index] : desktopPositions[index];
};

export default Hero; 