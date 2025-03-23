import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  TextField, 
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Slide,
  Paper,
  alpha
} from '@mui/material';
import { Email, Phone, LinkedIn, CheckCircle, Send, GitHub, LocationOn } from '@mui/icons-material';
import { TransitionProps } from '@mui/material/transitions';
import { motion } from 'framer-motion';
import { useTheme as useThemeMode } from '../context/ThemeContext';

interface ContactInfo {
  icon: React.ReactElement;
  title: string;
  value: string;
  link: string;
  color: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Contact: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { mode } = useThemeMode();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo: ContactInfo[] = [
    {
      icon: <Email fontSize="large" />,
      title: 'Email',
      value: 'niharp214@gmail.com',
      link: 'mailto:niharp214@gmail.com',
      color: '#64ffda'
    },
    {
      icon: <Phone fontSize="large" />,
      title: 'Phone',
      value: '+91 9726731007',
      link: 'tel:+919726731007',
      color: '#00bcd4'
    },
    {
      icon: <LinkedIn fontSize="large" />,
      title: 'LinkedIn',
      value: 'Nihar Patel',
      link: 'https://linkedin.com/in/nihar-patel-8a5375206/',
      color: '#0077b5'
    },
    {
      icon: <GitHub fontSize="large" />,
      title: 'GitHub',
      value: '@niharpatel',
      link: 'https://github.com/niharpatel',
      color: '#6e5494'
    },
    {
      icon: <LocationOn fontSize="large" />,
      title: 'Location',
      value: 'Gujarat, India',
      link: 'https://goo.gl/maps/YOUR_LOCATION',
      color: '#ff4081'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box 
      id="contact"
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: mode === 'dark'
          ? 'linear-gradient(180deg, #0a192f 0%, #112240 100%)'
          : 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: { xs: 80, md: 80 },
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
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
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
                background: mode === 'dark'
                  ? 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)'
                  : 'linear-gradient(45deg, #0ea5e9 30%, #3b82f6 90%)',
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
                  color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                  opacity: 0.4,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              },
              '&::after': {
                content: '"/>"',
                position: 'absolute',
                left: '102%',
                  color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                  opacity: 0.4,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }
            }}
          >
            Get In Touch
          </Typography>
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
              Let's collaborate on your next project! I'm always excited to discuss new opportunities
              and bring innovative ideas to life.
          </Typography>
        </Box>

          <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
            <Paper 
              elevation={0}
              sx={{ 
                p: 4, 
                height: '100%',
                    background: mode === 'dark'
                      ? 'rgba(17, 34, 64, 0.6)'
                      : 'rgba(248, 250, 252, 0.6)',
                    backdropFilter: 'blur(10px)',
                border: '1px solid',
                    borderColor: mode === 'dark'
                      ? 'rgba(100,255,218,0.1)'
                      : 'rgba(14,165,233,0.1)',
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: mode === 'dark'
                        ? 'linear-gradient(90deg, transparent, #64ffda, transparent)'
                        : 'linear-gradient(90deg, transparent, #0ea5e9, transparent)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }
                  }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{
                      fontWeight: 600,
                      color: mode === 'dark' ? '#e6f1ff' : '#1e293b',
                      mb: 3,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                Contact Info
              </Typography>
                  <Typography 
                    sx={{
                      color: mode === 'dark' ? '#8892b0' : '#64748b',
                      mb: 4,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                Feel free to reach out through any of these channels:
              </Typography>
              <Box sx={{ mt: 4 }}>
                    {contactInfo.map(({ icon, title, value, link, color }, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Box
                    component="a"
                    href={link}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 3,
                      p: 2,
                      textDecoration: 'none',
                            color: mode === 'dark' ? '#e6f1ff' : '#1e293b',
                            borderRadius: 2,
                            background: mode === 'dark'
                              ? 'rgba(17, 34, 64, 0.3)'
                              : 'rgba(248, 250, 252, 0.3)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            border: '1px solid',
                            borderColor: mode === 'dark'
                              ? 'rgba(100,255,218,0.1)'
                              : 'rgba(14,165,233,0.1)',
                      '&:hover': {
                        transform: 'translateX(8px)',
                              background: mode === 'dark'
                                ? 'rgba(17, 34, 64, 0.5)'
                                : 'rgba(248, 250, 252, 0.5)',
                              borderColor: alpha(color, 0.3),
                        '& .icon': {
                                color: color,
                                transform: 'scale(1.1) rotate(5deg)',
                        }
                      },
                    }}
                          target={title === 'LinkedIn' || title === 'GitHub' ? '_blank' : undefined}
                          rel={title === 'LinkedIn' || title === 'GitHub' ? 'noopener noreferrer' : undefined}
                  >
                    <Box 
                      className="icon"
                      sx={{ 
                        mr: 2, 
                              color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      {icon}
                    </Box>
                    <Box>
                            <Typography 
                              variant="subtitle2" 
                              sx={{
                                color: color,
                                fontWeight: 600,
                                mb: 0.5,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              }}
                            >
                        {title}
                      </Typography>
                            <Typography 
                              variant="body2" 
                              sx={{
                                color: mode === 'dark' ? '#8892b0' : '#64748b',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              }}
                            >
                        {value}
                      </Typography>
                    </Box>
                  </Box>
                      </motion.div>
                ))}
              </Box>
            </Paper>
              </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
            <Paper
              elevation={0}
              sx={{ 
                p: 4,
                    background: mode === 'dark'
                      ? 'rgba(17, 34, 64, 0.6)'
                      : 'rgba(248, 250, 252, 0.6)',
                    backdropFilter: 'blur(10px)',
                border: '1px solid',
                    borderColor: mode === 'dark'
                      ? 'rgba(100,255,218,0.1)'
                      : 'rgba(14,165,233,0.1)',
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: mode === 'dark'
                        ? 'linear-gradient(90deg, transparent, #64ffda, transparent)'
                        : 'linear-gradient(90deg, transparent, #0ea5e9, transparent)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }
                  }}
                >
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{
                      fontWeight: 600,
                      color: mode === 'dark' ? '#e6f1ff' : '#1e293b',
                      mb: 3,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                Send Message
              </Typography>
                  <Typography 
                    sx={{
                      color: mode === 'dark' ? '#8892b0' : '#64748b',
                      mb: 4,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                Have a question or want to work together?
              </Typography>
              <Box 
                component="form" 
                onSubmit={handleSubmit}
                sx={{ mt: 4 }}
              >
                <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                              color: mode === 'dark' ? '#e6f1ff' : '#1e293b',
                              '& fieldset': {
                                borderColor: mode === 'dark'
                                  ? 'rgba(100,255,218,0.2)'
                                  : 'rgba(14,165,233,0.2)',
                              },
                          '&:hover fieldset': {
                                borderColor: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: mode === 'dark' ? '#8892b0' : '#64748b',
                              '&.Mui-focused': {
                                color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              },
                            },
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                  </Grid>
                      <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                          type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                              color: mode === 'dark' ? '#e6f1ff' : '#1e293b',
                              '& fieldset': {
                                borderColor: mode === 'dark'
                                  ? 'rgba(100,255,218,0.2)'
                                  : 'rgba(14,165,233,0.2)',
                              },
                          '&:hover fieldset': {
                                borderColor: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: mode === 'dark' ? '#8892b0' : '#64748b',
                              '&.Mui-focused': {
                                color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              },
                            },
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                          multiline
                          rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                              color: mode === 'dark' ? '#e6f1ff' : '#1e293b',
                              '& fieldset': {
                                borderColor: mode === 'dark'
                                  ? 'rgba(100,255,218,0.2)'
                                  : 'rgba(14,165,233,0.2)',
                              },
                          '&:hover fieldset': {
                                borderColor: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: mode === 'dark' ? '#8892b0' : '#64748b',
                              '&.Mui-focused': {
                                color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                              },
                            },
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<Send />}
                      sx={{
                        py: 1.5,
                        px: 4,
                            background: mode === 'dark'
                              ? 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)'
                              : 'linear-gradient(45deg, #0ea5e9 30%, #3b82f6 90%)',
                            border: '1px solid',
                            borderColor: mode === 'dark'
                              ? 'rgba(100,255,218,0.3)'
                              : 'rgba(14,165,233,0.3)',
                            color: mode === 'dark' ? '#0a192f' : '#f8fafc',
                            fontWeight: 600,
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
                          background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)',
                              transform: 'translateX(-100%)',
                              transition: 'transform 0.6s',
                        },
                        '&:hover': {
                          transform: 'translateY(-2px)',
                              boxShadow: mode === 'dark'
                                ? '0 4px 20px rgba(100,255,218,0.2)'
                                : '0 4px 20px rgba(14,165,233,0.2)',
                              '&::before': {
                                transform: 'translateX(100%)',
                          },
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: 2,
            background: mode === 'dark'
              ? 'rgba(17, 34, 64, 0.95)'
              : 'rgba(248, 250, 252, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid',
            borderColor: mode === 'dark'
              ? 'rgba(100,255,218,0.2)'
              : 'rgba(14,165,233,0.2)',
            minWidth: { xs: '90%', sm: 400 },
            position: 'relative',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: mode === 'dark'
                ? 'linear-gradient(90deg, transparent, #64ffda, transparent)'
                : 'linear-gradient(90deg, transparent, #0ea5e9, transparent)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }
          }
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', pt: 4 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
          <CheckCircle 
            sx={{ 
              fontSize: 60, 
                color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
              mb: 2,
                filter: mode === 'dark'
                  ? 'drop-shadow(0 0 10px rgba(100,255,218,0.3))'
                  : 'drop-shadow(0 0 10px rgba(14,165,233,0.3))',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }} 
            />
          </motion.div>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{
              fontWeight: 600,
              color: mode === 'dark' ? '#e6f1ff' : '#1e293b',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Thank You!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography 
            variant="body1" 
            textAlign="center" 
            sx={{
              color: mode === 'dark' ? '#8892b0' : '#64748b',
              mb: 2,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Your message has been sent successfully! I appreciate you taking the time to reach out.
          </Typography>
          <Typography 
            variant="body2" 
            textAlign="center" 
            sx={{
              color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
              fontWeight: 500,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            I'll get back to you as soon as possible.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button 
            onClick={handleClose}
            variant="contained"
            sx={{
              px: 4,
              py: 1,
              background: mode === 'dark'
                ? 'linear-gradient(45deg, #64ffda 30%, #00bcd4 90%)'
                : 'linear-gradient(45deg, #0ea5e9 30%, #3b82f6 90%)',
              color: mode === 'dark' ? '#0a192f' : '#f8fafc',
              fontWeight: 600,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: mode === 'dark'
                  ? '0 4px 20px rgba(100,255,218,0.2)'
                  : '0 4px 20px rgba(14,165,233,0.2)',
              }
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contact; 