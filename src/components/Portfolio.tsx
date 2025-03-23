import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Chip,
  Stack,
  useTheme,
  alpha
} from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubLink?: string;
  liveLink?: string;
  type: string;
}

const Portfolio: React.FC = () => {
  const theme = useTheme();

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and order processing capabilities. Built with React and Material-UI.',
      image: '/images/projects/ecommerce-dashboard.jpg',
      tech: ['React', 'TypeScript', 'Material-UI', 'Redux', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/ecommerce-dashboard',
      liveLink: 'https://ecommerce-dashboard.demo.com',
      type: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking. Features include drag-and-drop interface and deadline notifications.',
      image: '/images/projects/task-manager.jpg',
      tech: ['React', 'Node.js', 'Express', 'Socket.io', 'PostgreSQL'],
      githubLink: 'https://github.com/yourusername/task-manager',
      liveLink: 'https://task-manager.demo.com',
      type: 'Web App'
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'A modern weather application with location-based forecasting, interactive maps, and severe weather alerts. Utilizes multiple weather APIs for accurate predictions.',
      image: '/images/projects/weather-app.jpg',
      tech: ['React', 'OpenWeather API', 'Mapbox', 'CSS3', 'Progressive Web App'],
      githubLink: 'https://github.com/yourusername/weather-app',
      liveLink: 'https://weather-app.demo.com',
      type: 'Frontend'
    }
  ];

  return (
    <Box
      id="portfolio"
      component="section"
      sx={{
        py: 12,
        bgcolor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(180deg, rgba(10,25,47,0) 0%, rgba(100,255,218,0.05) 100%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            color="primary"
            textTransform="uppercase"
            fontWeight="medium"
            sx={{
              mb: 2,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 40,
                height: 2,
                bgcolor: 'primary.main'
              }
            }}
          >
            Portfolio
          </Typography>
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
            Latest Works
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[10],
                    '& .project-overlay': {
                      opacity: 1
                    },
                    '& .project-content': {
                      transform: 'translateY(0)'
                    }
                  }
                }}
              >
                <Box sx={{ position: 'relative', pt: '60%' }}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <Box
                    className="project-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: alpha(theme.palette.background.paper, 0.9),
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Stack direction="row" spacing={2}>
                      {project.githubLink && (
                        <IconButton
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: 'text.primary',
                            '&:hover': { color: 'primary.main' }
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
                            color: 'text.primary',
                            '&:hover': { color: 'primary.main' }
                          }}
                        >
                          <Launch />
                        </IconButton>
                      )}
                    </Stack>
                  </Box>
                </Box>

                <CardContent
                  className="project-content"
                  sx={{
                    flexGrow: 1,
                    transition: 'transform 0.3s ease-in-out',
                    transform: 'translateY(0)'
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={project.type}
                      size="small"
                      icon={<Code />}
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'background.paper',
                        fontWeight: 'medium'
                      }}
                    />
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 'auto' }}>
                    {project.tech.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          mb: 1,
                          borderColor: 'primary.main',
                          color: 'text.primary',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'background.paper'
                          }
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio; 