import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Chip, Box, useTheme, useMediaQuery } from '@mui/material';
import { Html, Css, Javascript, GitHub } from '@mui/icons-material';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { IconType, IconBaseProps } from 'react-icons';
import { motion } from 'framer-motion';
import { useTheme as useThemeMode } from '../context/ThemeContext';

interface SkillProps {
  id: number;
  icon: React.ReactElement;
  title: string;
  color: string;
  description: string;
}

const IconWrapper = ({ icon: Icon, size }: { icon: IconType; size: number }) => {
  return React.createElement(Icon as React.ComponentType<IconBaseProps>, { size });
};

const Skills: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode } = useThemeMode();

  const headerGradient = isMobile 
    ? 'linear-gradient(90deg, #64ffda 0%, #ccd6f6 100%)'
    : 'linear-gradient(135deg, #64ffda 0%, #ccd6f6 100%)';

  const skills: SkillProps[] = [
    {
      id: 1,
      icon: <Html fontSize="large" />,
      title: 'HTML',
      color: '#E44D26',
      description: 'Semantic markup & modern HTML5 features',
    },
    {
      id: 2,
      icon: <Css fontSize="large" />,
      title: 'CSS',
      color: '#264DE4',
      description: 'Responsive design & animations',
    },
    {
      id: 3,
      icon: <Javascript fontSize="large" />,
      title: 'JavaScript',
      color: '#F7DF1E',
      description: 'ES6+, async/await, DOM manipulation',
    },
    {
      id: 4,
      icon: <IconWrapper icon={SiTypescript} size={30} />,
      title: 'TypeScript',
      color: '#3178C6',
      description: 'Type-safe development & interfaces',
    },
    {
      id: 5,
      icon: <IconWrapper icon={FaReact} size={30} />,
      title: 'React',
      color: '#61DAFB',
      description: 'Hooks, Context, Redux & Next.js',
    },
    {
      id: 6,
      icon: <GitHub fontSize="large" />,
      title: 'Git',
      color: '#F05032',
      description: 'Version control & collaboration',
    },
  ];

  const otherSkills = [
    { name: 'C/C++', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'Material-UI', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Problem Solving', category: 'Soft Skills' },
    { name: 'Team Work', category: 'Soft Skills' },
  ];

  return (
    <Box
      id="skills"
      sx={{
        background: mode === 'dark'
          ? '#0a192f'
          : '#f8fafc',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: mode === 'dark'
            ? 'linear-gradient(180deg, rgba(17, 34, 64, 0.6) 0%, rgba(10, 25, 47, 0.6) 100%)'
            : 'linear-gradient(180deg, rgba(248, 250, 252, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%)',
          zIndex: 0,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }
      }}
    >
      {/* Top partition line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: mode === 'dark'
            ? 'linear-gradient(90deg, #0a192f 0%, #64ffda 50%, #0a192f 100%)'
            : 'linear-gradient(90deg, #f8fafc 0%, #64ffda 50%, #f8fafc 100%)',
          opacity: mode === 'dark' ? 0.2 : 0.3,
          zIndex: 1,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
          <Typography
            variant="h2"
            align="center"
            sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
                background: headerGradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                mb: { xs: 1, md: 2 },
                display: 'inline-block',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&::before': {
                  content: '"<"',
                position: 'absolute',
                  color: '#64ffda',
                  opacity: mode === 'dark' ? 0.8 : 0.6,
                  right: '100%',
                  marginRight: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              },
              '&::after': {
                content: '"/>"',
                position: 'absolute',
                  color: '#64ffda',
                  opacity: mode === 'dark' ? 0.8 : 0.6,
                  left: '100%',
                  marginLeft: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }
            }}
          >
            My Skills
          </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {skills.map(({ id, icon, title, color, description }, index) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
              <Card 
                sx={{ 
                  height: '100%', 
                    background: mode === 'dark'
                      ? 'rgba(17, 34, 64, 0.5)'
                      : 'rgba(248, 250, 252, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid',
                    borderColor: mode === 'dark'
                      ? 'rgba(100, 255, 218, 0.1)'
                      : 'rgba(100, 255, 218, 0.2)',
                    borderRadius: '10px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    p: { xs: 2, md: 3 },
                  '&:hover': {
                      transform: 'translateY(-8px)',
                      background: mode === 'dark'
                        ? 'rgba(17, 34, 64, 0.7)'
                        : 'rgba(248, 250, 252, 0.7)',
                      borderColor: '#64ffda',
                      boxShadow: mode === 'dark'
                        ? '0 10px 30px -15px rgba(2,12,27,0.7)'
                        : '0 10px 30px -15px rgba(2,12,27,0.2)',
                      '& .skill-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      }
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: '0 !important' }}>
                    <Box 
                      className="skill-icon"
                      sx={{ 
                        mb: 2,
                        color,
                        fontSize: { xs: '2.5rem', md: '3rem' },
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        filter: `drop-shadow(0 0 8px ${mode === 'dark' ? 'rgba(100,255,218,0.3)' : 'rgba(100,255,218,0.4)'})`
                      }}
                    >
                    {icon}
                  </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 1,
                        color: mode === 'dark' ? '#ccd6f6' : '#1e293b',
                        fontWeight: 600,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        letterSpacing: '0.5px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                    {title}
                  </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: mode === 'dark' ? '#8892b0' : '#64748b',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        lineHeight: 1.6,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      {description}
                    </Typography>
                </CardContent>
              </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              mb: { xs: 3, md: 4 },
              color: mode === 'dark' ? '#ccd6f6' : '#1e293b',
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              fontWeight: 600,
              position: 'relative',
              pl: 2,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '4px',
                height: '100%',
                background: '#64ffda',
                borderRadius: '4px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }
            }}
          >
            Additional Skills
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: { xs: 1.5, sm: 2 },
            mx: { xs: -1, md: 0 }
          }}>
            {otherSkills.map(({ name, category }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Chip
                  label={name}
                sx={{
                    bgcolor: mode === 'dark'
                      ? 'rgba(17, 34, 64, 0.7)'
                      : 'rgba(248, 250, 252, 0.7)',
                    color: '#64ffda',
                    border: '1px solid',
                    borderColor: mode === 'dark'
                      ? 'rgba(100, 255, 218, 0.3)'
                      : 'rgba(100, 255, 218, 0.4)',
                    borderRadius: '6px',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                    height: 'auto',
                    py: 1,
                    px: 1,
                  '&:hover': {
                      bgcolor: mode === 'dark'
                        ? 'rgba(100, 255, 218, 0.1)'
                        : 'rgba(100, 255, 218, 0.15)',
                      borderColor: '#64ffda',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -1,
                      borderRadius: '7px',
                      padding: '1px',
                      background: `linear-gradient(45deg, ${
                        category === 'Languages' ? '#FF4D4D' :
                        category === 'Frontend' ? '#4D79FF' :
                        category === 'Backend' ? '#4DFF4D' :
                        category === 'Database' ? '#FFD700' :
                        '#FF4DFF'
                      }, transparent 60%)`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      opacity: mode === 'dark' ? 1 : 0.8,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }
                }}
              />
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* Bottom partition line */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: mode === 'dark'
            ? 'linear-gradient(90deg, #0a192f 0%, #64ffda 50%, #0a192f 100%)'
            : 'linear-gradient(90deg, #f8fafc 0%, #64ffda 50%, #f8fafc 100%)',
          opacity: mode === 'dark' ? 0.2 : 0.3,
          zIndex: 1,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          right: '10%',
          width: { xs: '200px', md: '300px' },
          height: { xs: '200px', md: '300px' },
          borderRadius: '50%',
          background: mode === 'dark'
            ? 'radial-gradient(circle, rgba(100,255,218,0.03) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(100,255,218,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          opacity: mode === 'dark' ? 0.5 : 0.6,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: { xs: '150px', md: '250px' },
          height: { xs: '150px', md: '250px' },
          borderRadius: '50%',
          background: mode === 'dark'
            ? 'radial-gradient(circle, rgba(100,255,218,0.02) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(100,255,218,0.04) 0%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
          opacity: mode === 'dark' ? 0.4 : 0.5,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </Box>
  );
};

export default Skills; 