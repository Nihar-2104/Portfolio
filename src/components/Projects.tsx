import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Chip,
  Stack,
} from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme as useThemeMode } from '../context/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  features?: string[];
}

const Projects: React.FC = () => {
  const { mode } = useThemeMode();

  const projects: Project[] = [
    {
      id: 1,
      title: 'My Bolt',
      description: 'A high-performance web application designed to revolutionize user experience with modern design principles and optimized performance.',
      features: [
        'Real-time data synchronization',
        'Optimized performance with React.js',
        'Responsive design for all devices',
        'Modern UI/UX with Bootstrap'
      ],
      tech: ['React.js', 'Bootstrap', 'JavaScript', 'REST API'],
      image: '/images/project1.jpg',
      liveLink: 'https://mybolt.com',
      githubLink: 'https://github.com/yourusername/mybolt'
    },
    {
      id: 2,
      title: 'Sizzle Food Ordering',
      description: 'A comprehensive food delivery platform that combines real-time tracking with an intuitive ordering system.',
      features: [
        'Real-time order tracking system',
        'Secure payment integration',
        'Location-based delivery',
        'User authentication & profiles'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      image: '/images/project2.jpg',
      liveLink: 'https://sizzle.com',
      githubLink: 'https://github.com/yourusername/sizzle'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Box 
      id="projects"
      component="section" 
      sx={{ 
        py: 12,
        background: mode === 'dark'
          ? 'linear-gradient(180deg, #0a192f 0%, #112240 100%)'
          : 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: 64,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          maxWidth: '1200px',
          height: '1px',
          background: mode === 'dark'
            ? 'linear-gradient(90deg, transparent, #64ffda, transparent)'
            : 'linear-gradient(90deg, transparent, #0ea5e9, transparent)',
          opacity: mode === 'dark' ? 1 : 0.8,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '&::before': {
          top: 0,
        },
        '&::after': {
          bottom: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Box sx={{ textAlign: 'center', mb: 8, position: 'relative' }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                  display: 'inline-block',
                  position: 'relative',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&::before': {
                    content: '"<"',
                    position: 'absolute',
                    right: '102%',
                    color: '#64ffda',
                    opacity: mode === 'dark' ? 0.4 : 0.6,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                  '&::after': {
                    content: '"/>"',
                    position: 'absolute',
                    left: '102%',
                    color: '#64ffda',
                    opacity: mode === 'dark' ? 0.4 : 0.6,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }
                }}
              >
                Featured Projects
              </Typography>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Typography 
                variant="subtitle1" 
                sx={{
                  color: mode === 'dark' ? '#8892b0' : '#64748b',
                  maxWidth: '600px',
                  mx: 'auto',
                  mb: 4,
                  lineHeight: 1.8,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Explore a collection of my notable projects that demonstrate my expertise
                in creating innovative digital solutions.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.id}>
                <motion.div variants={itemVariants}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: mode === 'dark'
                        ? 'rgba(17, 34, 64, 0.6)'
                        : 'rgba(248, 250, 252, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid',
                      borderColor: mode === 'dark'
                        ? 'rgba(100,255,218,0.1)'
                        : 'rgba(14,165,233,0.1)',
                      borderRadius: 2,
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: mode === 'dark'
                          ? '0 20px 40px rgba(100,255,218,0.1)'
                          : '0 20px 40px rgba(14,165,233,0.1)',
                        borderColor: mode === 'dark'
                          ? 'rgba(100,255,218,0.2)'
                          : 'rgba(14,165,233,0.2)',
                        '& .project-image': {
                          transform: 'scale(1.05)',
                        }
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={project.image}
                        alt={project.title}
                        className="project-image"
                        sx={{
                          transition: 'transform 0.5s ease',
                          filter: mode === 'dark'
                            ? 'brightness(0.8)'
                            : 'brightness(0.9)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: mode === 'dark'
                            ? 'linear-gradient(to bottom, transparent 0%, rgba(10,25,47,0.8) 100%)'
                            : 'linear-gradient(to bottom, transparent 0%, rgba(248,250,252,0.8) 100%)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />
                    </Box>

                    <CardContent 
                      sx={{ 
                        flexGrow: 1,
                        p: 4,
                        background: mode === 'dark'
                          ? 'rgba(17, 34, 64, 0.6)'
                          : 'rgba(248, 250, 252, 0.6)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{
                          color: mode === 'dark' ? '#e6f1ff' : '#1e293b',
                          fontWeight: 600,
                          mb: 2,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography 
                        variant="body2" 
                        sx={{
                          color: mode === 'dark' ? '#8892b0' : '#64748b',
                          mb: 3,
                          lineHeight: 1.8,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        {project.description}
                      </Typography>

                      {project.features && (
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              mb: 1,
                              fontFamily: 'monospace',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                          >
                            Key Features:
                          </Typography>
                          <Stack spacing={1}>
                            {project.features.map((feature, idx) => (
                              <Box
                                key={idx}
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 1,
                                }}
                              >
                                <Code sx={{ 
                                  color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                                  fontSize: '1rem',
                                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                }} />
                                <Typography
                                  variant="body2"
                                  sx={{ 
                                    color: mode === 'dark' ? '#8892b0' : '#64748b',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                  }}
                                >
                                  {feature}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Box>
                      )}

                      <Stack 
                        direction="row" 
                        spacing={1} 
                        flexWrap="wrap" 
                        sx={{ mb: 3 }}
                      >
                        {project.tech.map((item) => (
                          <Chip
                            key={item}
                            label={item}
                            size="small"
                            sx={{
                              mb: 1,
                              color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              borderColor: mode === 'dark'
                                ? 'rgba(100,255,218,0.3)'
                                : 'rgba(14,165,233,0.3)',
                              backgroundColor: mode === 'dark'
                                ? 'rgba(100,255,218,0.1)'
                                : 'rgba(14,165,233,0.1)',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              '&:hover': {
                                backgroundColor: mode === 'dark'
                                  ? 'rgba(100,255,218,0.2)'
                                  : 'rgba(14,165,233,0.2)',
                              }
                            }}
                          />
                        ))}
                      </Stack>

                      <Box 
                        sx={{ 
                          display: 'flex', 
                          gap: 2,
                          justifyContent: 'flex-end',
                          mt: 'auto'
                        }}
                      >
                        {project.githubLink && (
                          <IconButton
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                              color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              border: '1px solid',
                              borderColor: mode === 'dark'
                                ? 'rgba(100,255,218,0.3)'
                                : 'rgba(14,165,233,0.3)',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              '&:hover': {
                                backgroundColor: mode === 'dark'
                                  ? 'rgba(100,255,218,0.1)'
                                  : 'rgba(14,165,233,0.1)',
                                transform: 'translateY(-2px)',
                              }
                            }}
                          >
                            <GitHub />
                          </IconButton>
                        )}
                        {project.liveLink && (
                          <IconButton
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                              color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              border: '1px solid',
                              borderColor: mode === 'dark'
                                ? 'rgba(100,255,218,0.3)'
                                : 'rgba(14,165,233,0.3)',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              '&:hover': {
                                backgroundColor: mode === 'dark'
                                  ? 'rgba(100,255,218,0.1)'
                                  : 'rgba(14,165,233,0.1)',
                                transform: 'translateY(-2px)',
                              }
                            }}
                          >
                            <Launch />
                          </IconButton>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 