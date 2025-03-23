import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import { useTheme as useThemeMode } from '../context/ThemeContext';

const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.3),
                 0 0 20px rgba(100, 255, 218, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(100, 255, 218, 0.5),
                 0 0 30px rgba(100, 255, 218, 0.5);
  }
  100% {
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.3),
                 0 0 20px rgba(100, 255, 218, 0.3);
  }
`;

const cursorBlink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const Name: React.FC = () => {
  const { mode } = useThemeMode();

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: "'Fira Code', monospace",
        color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
        fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
        position: 'relative',
        '&::before': {
          content: '"<"',
          marginRight: '4px',
          color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
          opacity: 0.7,
        },
        '&::after': {
          content: '"/>"',
          marginLeft: '4px',
          color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
          opacity: 0.7,
        },
      }}
    >
      <Typography
        component="span"
        sx={{
          fontFamily: 'inherit',
          fontWeight: 500,
          color: 'inherit',
          animation: `${glowAnimation} 3s ease-in-out infinite`,
          transition: 'all 0.3s ease-in-out',
          position: 'relative',
          '&:hover': {
            color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
            textShadow: mode === 'dark'
              ? '0 0 20px rgba(100, 255, 218, 0.5), 0 0 40px rgba(100, 255, 218, 0.3)'
              : '0 0 20px rgba(14, 165, 233, 0.5), 0 0 40px rgba(14, 165, 233, 0.3)',
          },
          '&::after': {
            content: '"|"',
            position: 'absolute',
            right: '-12px',
            animation: `${cursorBlink} 1s step-end infinite`,
            color: 'inherit',
          },
        }}
      >
        Nihar Patel
      </Typography>
    </Box>
  );
};

export default Name; 