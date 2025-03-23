import React from 'react';
import { Box } from '@mui/material';

interface BackgroundEffectProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const BackgroundEffect: React.FC<BackgroundEffectProps> = ({ position = 'top-right' }) => {
  const getPosition = () => {
    switch (position) {
      case 'top-left':
        return { top: '-250px', left: '-250px' };
      case 'top-right':
        return { top: '-250px', right: '-250px' };
      case 'bottom-left':
        return { bottom: '-250px', left: '-250px' };
      case 'bottom-right':
        return { bottom: '-250px', right: '-250px' };
      default:
        return { top: '-250px', right: '-250px' };
    }
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,255,218,0.03) 0%, rgba(10,25,47,0) 70%)',
        ...getPosition(),
        zIndex: 0,
        animation: 'pulse 8s ease-in-out infinite',
        '@keyframes pulse': {
          '0%': {
            transform: 'scale(1)',
            opacity: 0.3,
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: 0.15,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 0.3,
          },
        },
      }}
    />
  );
};

export default BackgroundEffect; 