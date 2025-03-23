import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/images/profile-photo.jpeg';

const FuturisticProfile: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '300px',
        height: '300px',
        borderRadius: '20px',
        overflow: 'visible',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: '-2px',
          borderRadius: '22px',
          padding: '3px',
          background: 'linear-gradient(45deg, #64ffda, transparent, #64ffda)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: 'borderRotate 4s linear infinite',
        },
        '@keyframes borderRotate': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          component="img"
          src={profilePhoto}
          alt="Nihar Patel"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '18px',
            filter: 'contrast(1.1) brightness(1.1)',
            WebkitMask: 'linear-gradient(black, black)',
            transition: 'all 0.3s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, rgba(100,255,218,0.2), transparent)',
              mixBlendMode: 'screen',
            },
          }}
        />
        
        {/* Futuristic Overlay Effects */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '18px',
            background: 'linear-gradient(135deg, rgba(100,255,218,0.1) 0%, rgba(10,25,47,0.2) 100%)',
            backdropFilter: 'blur(2px)',
            opacity: 0.7,
            mixBlendMode: 'overlay',
          }}
        />
        
        {/* Scanning Line Effect */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #64ffda, transparent)',
            animation: 'scan 2s linear infinite',
            '@keyframes scan': {
              '0%': {
                transform: 'translateY(0)',
              },
              '100%': {
                transform: 'translateY(300px)',
              },
            },
          }}
        />
        
        {/* Corner Accents */}
        {[0, 90, 180, 270].map((rotation) => (
          <Box
            key={rotation}
            sx={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              border: '2px solid #64ffda',
              borderRadius: '2px',
              transform: `rotate(${rotation}deg)`,
              ...(rotation === 0 && { top: '-10px', left: '-10px' }),
              ...(rotation === 90 && { top: '-10px', right: '-10px' }),
              ...(rotation === 180 && { bottom: '-10px', right: '-10px' }),
              ...(rotation === 270 && { bottom: '-10px', left: '-10px' }),
              opacity: 0.7,
            }}
          />
        ))}
      </motion.div>
    </Box>
  );
};

export default FuturisticProfile; 