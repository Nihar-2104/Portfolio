import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import { useTheme as useThemeMode } from '../context/ThemeContext';
import Name from './Name';

const glowAnimationDark = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(100, 255, 218, 0.3),
                0 0 15px rgba(100, 255, 218, 0.2),
                inset 0 0 10px rgba(100, 255, 218, 0.2);
    filter: brightness(0.95) hue-rotate(0deg);
  }
  50% {
    box-shadow: 0 0 20px rgba(100, 255, 218, 0.5),
                0 0 30px rgba(100, 255, 218, 0.3),
                0 0 50px rgba(100, 255, 218, 0.2),
                inset 0 0 20px rgba(100, 255, 218, 0.4);
    filter: brightness(1.2) hue-rotate(10deg);
  }
  100% {
    box-shadow: 0 0 5px rgba(100, 255, 218, 0.3),
                0 0 15px rgba(100, 255, 218, 0.2),
                inset 0 0 10px rgba(100, 255, 218, 0.2);
    filter: brightness(0.95) hue-rotate(0deg);
  }
`;

const glowAnimationLight = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(14, 165, 233, 0.3),
                0 0 15px rgba(14, 165, 233, 0.2),
                inset 0 0 10px rgba(14, 165, 233, 0.2);
    filter: brightness(0.95) hue-rotate(0deg);
  }
  50% {
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.5),
                0 0 30px rgba(14, 165, 233, 0.3),
                0 0 50px rgba(14, 165, 233, 0.2),
                inset 0 0 20px rgba(14, 165, 233, 0.4);
    filter: brightness(1.2) hue-rotate(-10deg);
  }
  100% {
    box-shadow: 0 0 5px rgba(14, 165, 233, 0.3),
                0 0 15px rgba(14, 165, 233, 0.2),
                inset 0 0 10px rgba(14, 165, 233, 0.2);
    filter: brightness(0.95) hue-rotate(0deg);
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-5px) rotate(-3deg) scale(1.02);
  }
  75% {
    transform: translateY(5px) rotate(3deg) scale(1.02);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1) rotate(0deg);
    filter: contrast(100%) brightness(1);
  }
  50% {
    transform: scale(1.05) rotate(2deg);
    filter: contrast(120%) brightness(1.2);
  }
`;

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', onClick }) => {
  const { mode } = useThemeMode();

  const getSize = () => {
    switch (size) {
      case 'small':
        return { width: 35, height: 35, fontSize: '0.8rem' };
      case 'large':
        return { width: 70, height: 70, fontSize: '2.5rem' };
      default:
        return { width: 45, height: 45, fontSize: '1.8rem' };
    }
  };

  const dimensions = getSize();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Box
        onClick={onClick}
        sx={{
          width: dimensions.width,
          height: dimensions.height,
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: mode === 'dark'
            ? 'linear-gradient(135deg, rgba(100, 255, 218, 0.95) 0%, rgba(14, 165, 233, 0.95) 100%)'
            : 'linear-gradient(135deg, rgba(14, 165, 233, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%)',
          cursor: onClick ? 'pointer' : 'default',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: `${floatAnimation} 6s ease-in-out infinite, ${mode === 'dark' ? glowAnimationDark : glowAnimationLight} 3s infinite`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          '&:hover': {
            transform: 'scale(1.1)',
            animation: `${pulseAnimation} 2s ease-in-out infinite`,
            boxShadow: mode === 'dark'
              ? '0 0 30px rgba(100, 255, 218, 0.6), 0 0 60px rgba(100, 255, 218, 0.3), inset 0 0 20px rgba(100, 255, 218, 0.4)'
              : '0 0 30px rgba(14, 165, 233, 0.6), 0 0 60px rgba(14, 165, 233, 0.3), inset 0 0 20px rgba(14, 165, 233, 0.4)',
          },
          position: 'relative',
          overflow: 'hidden',
          border: '2px solid',
          borderColor: mode === 'dark'
            ? 'rgba(100, 255, 218, 0.6)'
            : 'rgba(14, 165, 233, 0.6)',
        }}
      >
        <Typography
          className="logo-text"
          variant="h4"
          sx={{
            fontSize: dimensions.fontSize,
            fontWeight: 900,
            color: mode === 'dark' ? '#0a192f' : '#f8fafc',
            textShadow: mode === 'dark'
              ? '0 0 15px rgba(100, 255, 218, 0.5), 0 0 30px rgba(100, 255, 218, 0.3)'
              : '0 0 15px rgba(14, 165, 233, 0.5), 0 0 30px rgba(14, 165, 233, 0.3)',
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: '1px',
            zIndex: 3,
            transform: 'rotate(-3deg)',
            background: mode === 'dark'
              ? 'linear-gradient(45deg, #0a192f 30%, #112240 90%)'
              : 'linear-gradient(45deg, #1e293b 30%, #334155 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: mode === 'dark'
              ? 'drop-shadow(0 0 8px rgba(100, 255, 218, 0.4))'
              : 'drop-shadow(0 0 8px rgba(14, 165, 233, 0.4))',
            mixBlendMode: 'overlay',
            '&:hover': {
              textShadow: mode === 'dark'
                ? '0 0 20px rgba(100, 255, 218, 0.7), 0 0 40px rgba(100, 255, 218, 0.4)'
                : '0 0 20px rgba(14, 165, 233, 0.7), 0 0 40px rgba(14, 165, 233, 0.4)',
            },
          }}
        >
          N
        </Typography>
      </Box>
      <Name />
    </Box>
  );
};

export default Logo; 