import React from 'react';
import { Box, Container, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { motion } from 'framer-motion';
import { Work, School, Code, Star, Build } from '@mui/icons-material';
import { useTheme as useThemeMode } from '../context/ThemeContext';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  type: 'work' | 'education' | 'project';
  icon?: 'work' | 'school' | 'code' | 'star' | 'build';
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Freelance",
    duration: "2023 - Present",
    description: [
      "Developed responsive web applications using React and Node.js",
      "Implemented secure authentication systems and RESTful APIs",
      "Collaborated with clients to deliver custom solutions",
      "Optimized application performance and user experience",
      "Integrated third-party APIs and services"
    ],
    type: "work",
    icon: "work",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"]
  },
  {
    id: 2,
    title: "Open Source Contributor",
    company: "GitHub Community",
    duration: "2022 - Present",
    description: [
      "Contributed to various open-source projects",
      "Fixed bugs and implemented new features",
      "Collaborated with developers worldwide",
      "Improved documentation and code quality"
    ],
    type: "work",
    icon: "code",
    technologies: ["Git", "JavaScript", "Python", "React", "Docker"]
  },
  {
    id: 3,
    title: "Bachelor of Engineering",
    company: "Government Engineering College, Gandhinagar",
    duration: "2021 - 2025",
    description: [
      "Computer Engineering with specialization in Software Development",
      "CGPA: 8.5/10",
      "Active member of coding club and tech community",
      "Led team in national-level hackathons",
      "Published research paper on ML applications"
    ],
    type: "education",
    icon: "school",
    technologies: ["C++", "Java", "Python", "Data Structures", "Algorithms"]
  },
  {
    id: 4,
    title: "Technical Lead",
    company: "College Tech Festival",
    duration: "2022 - 2023",
    description: [
      "Led a team of 10 developers for college tech fest website",
      "Managed project timeline and deliverables",
      "Implemented real-time event registration system",
      "Achieved 5000+ user registrations"
    ],
    type: "project",
    icon: "star",
    technologies: ["Next.js", "Firebase", "Material-UI", "Redux", "Node.js"]
  },
  {
    id: 5,
    title: "Web Development Intern",
    company: "Tech Startup",
    duration: "Summer 2023",
    description: [
      "Developed and maintained client-facing applications",
      "Implemented responsive designs and UI components",
      "Worked with agile development methodologies",
      "Participated in code reviews and team meetings"
    ],
    type: "work",
    icon: "build",
    technologies: ["React", "Vue.js", "GraphQL", "Tailwind CSS"]
  }
];

const Experience: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode } = useThemeMode();

  const getIcon = (iconType?: string) => {
    switch(iconType) {
      case 'work': return <Work />;
      case 'school': return <School />;
      case 'code': return <Code />;
      case 'star': return <Star />;
      case 'build': return <Build />;
      default: return <Work />;
    }
  };

  const headerGradient = isMobile 
    ? 'linear-gradient(90deg, #64ffda 0%, #ccd6f6 100%)'
    : 'linear-gradient(135deg, #64ffda 0%, #ccd6f6 100%)';

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        background: mode === 'dark' ? '#0a192f' : '#f8fafc',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: 64,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          width: { xs: '300px', md: '500px' },
          height: { xs: '300px', md: '500px' },
          borderRadius: '50%',
          background: mode === 'dark'
            ? 'radial-gradient(circle, rgba(100,255,218,0.03) 0%, rgba(10,25,47,0) 70%)'
            : 'radial-gradient(circle, rgba(100,255,218,0.05) 0%, rgba(255,255,255,0) 70%)',
          top: { xs: '-150px', md: '-250px' },
          right: { xs: '-150px', md: '-250px' },
          zIndex: 0,
          filter: 'blur(60px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              position: 'relative',
              background: headerGradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              width: '100%',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&::before': {
                content: '"<"',
                color: '#64ffda',
                opacity: mode === 'dark' ? 0.8 : 0.6,
                position: 'absolute',
                right: '100%',
                marginRight: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              },
              '&::after': {
                content: '"/>"',
                color: '#64ffda',
                opacity: mode === 'dark' ? 0.8 : 0.6,
                position: 'absolute',
                left: '100%',
                marginLeft: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }
            }}
          >
            Experience & Education
          </Typography>

          <Timeline 
            position={isMobile ? "right" : "alternate"}
            sx={{ 
              p: 0,
              mx: { xs: 2, md: 'auto' },
              '& .MuiTimelineItem-root:before': {
                flex: isMobile ? 0 : 1
              }
            }}
          >
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id}>
                {!isMobile && (
                  <TimelineOppositeContent>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontFamily: 'monospace',
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          opacity: 0.8,
                          color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        {exp.duration}
                      </Typography>
                    </motion.div>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot 
                    sx={{ 
                      bgcolor: '#64ffda',
                      boxShadow: mode === 'dark'
                        ? '0 0 20px rgba(100,255,218,0.4)'
                        : '0 0 20px rgba(100,255,218,0.6)',
                      p: 1,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '& svg': {
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                        color: mode === 'dark' ? '#0a192f' : '#f8fafc',
                      }
                    }}
                  >
                    {getIcon(exp.icon)}
                  </TimelineDot>
                  <TimelineConnector sx={{ 
                    bgcolor: '#64ffda',
                    opacity: mode === 'dark' ? 0.2 : 0.3,
                    height: { xs: 80, md: 100 },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <motion.div
                    initial={{ opacity: 0, x: isMobile ? 50 : (index % 2 === 0 ? 50 : -50) }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {isMobile && (
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          fontFamily: 'monospace',
                          fontSize: '0.9rem',
                          opacity: 0.8,
                          mb: 1,
                          display: 'block',
                          color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        {exp.duration}
                      </Typography>
                    )}
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 2, md: 3 },
                        bgcolor: mode === 'dark'
                          ? 'rgba(17, 34, 64, 0.6)'
                          : 'rgba(248, 250, 252, 0.6)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid',
                        borderColor: mode === 'dark'
                          ? 'rgba(100, 255, 218, 0.1)'
                          : 'rgba(100, 255, 218, 0.2)',
                        borderRadius: 2,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: mode === 'dark'
                            ? '0 20px 40px rgba(2,12,27,0.1)'
                            : '0 20px 40px rgba(2,12,27,0.05)',
                          borderColor: mode === 'dark'
                            ? 'rgba(100, 255, 218, 0.2)'
                            : 'rgba(100, 255, 218, 0.3)',
                          bgcolor: mode === 'dark'
                            ? 'rgba(17, 34, 64, 0.8)'
                            : 'rgba(248, 250, 252, 0.8)',
                        },
                      }}
                    >
                      <Typography 
                        variant="h6" 
                        component="h3"
                        sx={{ 
                          color: mode === 'dark' ? '#e6f1ff' : '#1e293b',
                          mb: 1,
                          fontSize: { xs: '1.1rem', md: '1.25rem' },
                          fontWeight: 600,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography 
                        variant="subtitle1"
                        sx={{ 
                          color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                          mb: 2,
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          opacity: 0.8,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        {exp.company}
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2 }}>
                        {exp.description.map((point, i) => (
                          <Typography
                            key={i}
                            component="li"
                            variant="body2"
                            sx={{
                              color: mode === 'dark' ? '#8892b0' : '#64748b',
                              mb: 1,
                              fontSize: { xs: '0.85rem', md: '0.9rem' },
                              lineHeight: 1.6,
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              '&::marker': {
                                color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              }
                            }}
                          >
                            {point}
                          </Typography>
                        ))}
                      </Box>
                      {exp.technologies && (
                        <Box sx={{ 
                          mt: 2,
                          pt: 2,
                          borderTop: '1px solid',
                          borderColor: mode === 'dark'
                            ? 'rgba(100, 255, 218, 0.1)'
                            : 'rgba(100, 255, 218, 0.2)',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}>
                          {exp.technologies.map((tech, i) => (
                            <Typography
                              key={i}
                              variant="caption"
                              sx={{
                                color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                                fontSize: '0.75rem',
                                bgcolor: mode === 'dark'
                                  ? 'rgba(100, 255, 218, 0.1)'
                                  : 'rgba(14, 165, 233, 0.1)',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                border: '1px solid',
                                borderColor: mode === 'dark'
                                  ? 'rgba(100, 255, 218, 0.2)'
                                  : 'rgba(14, 165, 233, 0.2)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              }}
                            >
                              {tech}
                            </Typography>
                          ))}
                        </Box>
                      )}
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>

      {/* Bottom decorative element */}
      <Box
        sx={{
          position: 'absolute',
          width: { xs: '250px', md: '400px' },
          height: { xs: '250px', md: '400px' },
          borderRadius: '50%',
          background: mode === 'dark'
            ? 'radial-gradient(circle, rgba(100,255,218,0.02) 0%, rgba(10,25,47,0) 70%)'
            : 'radial-gradient(circle, rgba(100,255,218,0.04) 0%, rgba(255,255,255,0) 70%)',
          bottom: { xs: '-125px', md: '-200px' },
          left: { xs: '-125px', md: '-200px' },
          zIndex: 0,
          filter: 'blur(50px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </Box>
  );
};

export default Experience;