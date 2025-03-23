import React, { useState, useRef, useCallback } from 'react';
import {
  Box,
  Fab,
  Dialog,
  DialogContent,
  TextField,
  Typography,
  IconButton,
  Paper,
  InputAdornment,
  useTheme,
  useMediaQuery,
  Avatar,
  Slide,
  Zoom,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import {
  Chat as ChatIcon,
  Close as CloseIcon,
  Send as SendIcon,
  AttachFile as AttachFileIcon,
  Image as ImageIcon,
} from '@mui/icons-material';
import { keyframes } from '@mui/system';
import { useTheme as useThemeMode } from '../context/ThemeContext';

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(100, 255, 218, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
  attachment?: {
    type: 'image' | 'file';
    url: string;
    name: string;
  };
}

const SlideTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ChatSupport = () => {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi there! I'm Nihar, your personal assistant. How can I help you today?",
      sender: 'support',
      timestamp: new Date(),
    },
  ]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleChatOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleChatClose = useCallback(() => {
    setIsOpen(false);
    setMessage('');
  }, []);

  const handleSend = useCallback(() => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setTimeout(scrollToBottom, 100);

    // Simulate response
    setTimeout(() => {
      const response: Message = {
        id: Date.now(),
        text: "I'll be happy to help! What specific information do you need?",
        sender: 'support',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, response]);
      setTimeout(scrollToBottom, 100);
    }, 1000);
  }, [message, scrollToBottom]);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'file') => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const newMessage: Message = {
        id: Date.now(),
        text: type === 'image' ? 'Sent an image' : `Sent a file: ${file.name}`,
        sender: 'user',
        timestamp: new Date(),
        attachment: {
          type,
          url: fileUrl,
          name: file.name,
        },
      };
      setMessages(prev => [...prev, newMessage]);
      setTimeout(scrollToBottom, 100);
      setTimeout(() => URL.revokeObjectURL(fileUrl), 1000);
    }
    event.target.value = '';
  }, [scrollToBottom]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  return (
    <>
      <Zoom in={!isOpen} timeout={300}>
        <Fab
          color="primary"
          onClick={handleChatOpen}
          sx={{
            position: 'fixed',
            bottom: { xs: 16, sm: 24 },
            right: { xs: 16, sm: 24 },
            bgcolor: mode === 'dark' ? '#64ffda' : '#0ea5e9',
            color: mode === 'dark' ? '#0a192f' : '#f8fafc',
            width: { xs: 50, sm: 56 },
            height: { xs: 50, sm: 56 },
            '&:hover': {
              bgcolor: mode === 'dark' ? '#64ffda' : '#0ea5e9',
              transform: 'scale(1.1)',
            },
            animation: `${pulseAnimation} 2s infinite`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: mode === 'dark'
              ? '0 4px 20px rgba(100, 255, 218, 0.3)'
              : '0 4px 20px rgba(14, 165, 233, 0.3)',
          }}
        >
          <ChatIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
        </Fab>
      </Zoom>

      <Dialog
        open={isOpen}
        onClose={handleChatClose}
        maxWidth="sm"
        fullWidth={!isMobile}
        fullScreen={isMobile}
        TransitionComponent={SlideTransition}
        sx={{
          '& .MuiDialog-container': {
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          },
        }}
        PaperProps={{
          sx: {
            bgcolor: mode === 'dark' ? '#0a192f' : '#f8fafc',
            backgroundImage: 'none',
            maxWidth: isMobile ? '100%' : isTablet ? '400px' : '440px',
            height: isMobile ? '100%' : '600px',
            position: 'relative',
            m: isMobile ? 0 : 2,
            mb: { xs: 0, sm: '80px' },
            mr: { xs: 0, sm: '24px' },
            borderRadius: isMobile ? '16px 16px 0 0' : '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            border: '1px solid',
            borderColor: mode === 'dark'
              ? 'rgba(100, 255, 218, 0.1)'
              : 'rgba(14, 165, 233, 0.1)',
            overflow: 'hidden',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        }}
      >
        <Box
          sx={{
            p: { xs: 2, sm: 2.5 },
            borderBottom: '1px solid',
            borderColor: mode === 'dark'
              ? 'rgba(100, 255, 218, 0.1)'
              : 'rgba(14, 165, 233, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: mode === 'dark'
              ? 'rgba(17, 34, 64, 0.95)'
              : 'rgba(248, 250, 252, 0.95)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar 
              sx={{ 
                bgcolor: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                color: mode === 'dark' ? '#0a192f' : '#f8fafc',
                width: { xs: 32, sm: 36 },
                height: { xs: 32, sm: 36 },
                border: '2px solid',
                borderColor: mode === 'dark'
                  ? 'rgba(100, 255, 218, 0.3)'
                  : 'rgba(14, 165, 233, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              N
            </Avatar>
            <Typography 
              sx={{ 
                color: mode === 'dark' ? '#e6f1ff' : '#1e293b',
                fontWeight: 600,
                fontSize: { xs: '1.1rem', sm: '1.2rem' },
                background: mode === 'dark'
                  ? 'linear-gradient(45deg, #64ffda 30%, #0ea5e9 90%)'
                  : 'linear-gradient(45deg, #0ea5e9 30%, #3b82f6 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Chat Support
            </Typography>
          </Box>
          <IconButton 
            onClick={handleChatClose}
            sx={{ 
              color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
              '&:hover': {
                bgcolor: mode === 'dark'
                  ? 'rgba(100, 255, 218, 0.1)'
                  : 'rgba(14, 165, 233, 0.1)',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent
          sx={{
            p: { xs: 2, sm: 2.5 },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            bgcolor: mode === 'dark'
              ? 'rgba(10, 25, 47, 0.97)'
              : 'rgba(248, 250, 252, 0.97)',
            backdropFilter: 'blur(12px)',
            height: '100%',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: mode === 'dark'
                ? 'rgba(17, 34, 64, 0.6)'
                : 'rgba(241, 245, 249, 0.6)',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: mode === 'dark'
                ? 'rgba(100, 255, 218, 0.3)'
                : 'rgba(14, 165, 233, 0.3)',
              borderRadius: '4px',
              '&:hover': {
                background: mode === 'dark'
                  ? 'rgba(100, 255, 218, 0.5)'
                  : 'rgba(14, 165, 233, 0.5)',
              },
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, sm: 2.5 },
              pr: 1,
            }}
          >
            {messages.map((msg) => (
              <Box
                key={msg.id}
                sx={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: 1.5,
                  animation: `${slideIn} 0.3s ease-out`,
                }}
              >
                {msg.sender === 'support' && (
                  <Avatar 
                    sx={{ 
                      width: { xs: 28, sm: 32 },
                      height: { xs: 28, sm: 32 },
                      bgcolor: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                      color: mode === 'dark' ? '#0a192f' : '#f8fafc',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    N
                  </Avatar>
                )}
                <Paper
                  elevation={6}
                  sx={{
                    p: { xs: 1.5, sm: 2 },
                    maxWidth: '75%',
                    bgcolor: msg.sender === 'user'
                      ? mode === 'dark'
                        ? 'rgba(100, 255, 218, 0.15)'
                        : 'rgba(14, 165, 233, 0.15)'
                      : mode === 'dark'
                        ? 'rgba(17, 34, 64, 0.8)'
                        : 'rgba(241, 245, 249, 0.8)',
                    color: msg.sender === 'user'
                      ? mode === 'dark' ? '#64ffda' : '#0ea5e9'
                      : mode === 'dark' ? '#e6f1ff' : '#1e293b',
                    borderRadius: 2,
                    position: 'relative',
                    border: '1px solid',
                    borderColor: msg.sender === 'user'
                      ? mode === 'dark'
                        ? 'rgba(100, 255, 218, 0.2)'
                        : 'rgba(14, 165, 233, 0.2)'
                      : mode === 'dark'
                        ? 'rgba(230, 241, 255, 0.1)'
                        : 'rgba(30, 41, 59, 0.1)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <Typography 
                    variant="body2"
                    sx={{
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      lineHeight: 1.5,
                    }}
                  >
                    {msg.text}
                  </Typography>
                  {msg.attachment && (
                    <Box
                      component={msg.attachment.type === 'image' ? 'img' : 'div'}
                      src={msg.attachment.type === 'image' ? msg.attachment.url : undefined}
                      sx={{
                        mt: 1,
                        maxWidth: '200px',
                        width: '100%',
                        borderRadius: 1,
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'scale(1.02)',
                        },
                      }}
                      onClick={() => window.open(msg.attachment?.url)}
                    >
                      {msg.attachment.type === 'file' && (
                        <Typography variant="caption" sx={{ color: 'inherit' }}>
                          {msg.attachment.name}
                        </Typography>
                      )}
                    </Box>
                  )}
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      mt: 0.5,
                      opacity: 0.7,
                      fontSize: { xs: '0.65rem', sm: '0.7rem' },
                      color: msg.sender === 'user'
                        ? mode === 'dark' ? '#64ffda' : '#0ea5e9'
                        : mode === 'dark' ? '#8892b0' : '#64748b',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Typography>
                </Paper>
                {msg.sender === 'user' && (
                  <Avatar 
                    sx={{ 
                      width: { xs: 28, sm: 32 },
                      height: { xs: 28, sm: 32 },
                      bgcolor: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                      color: mode === 'dark' ? '#0a192f' : '#f8fafc',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    U
                  </Avatar>
                )}
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Box>

          <Box sx={{ position: 'relative', mt: 'auto' }}>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => handleFileUpload(e, 'image')}
              ref={imageInputRef}
            />
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => handleFileUpload(e, 'file')}
              ref={fileInputRef}
            />

            <TextField
              fullWidth
              multiline
              maxRows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              variant="outlined"
              size={isMobile ? "small" : "medium"}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: mode === 'dark'
                    ? 'rgba(17, 34, 64, 0.6)'
                    : 'rgba(241, 245, 249, 0.6)',
                  color: mode === 'dark' ? '#e6f1ff' : '#1e293b',
                  borderRadius: 2,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  '& fieldset': {
                    borderColor: mode === 'dark'
                      ? 'rgba(100, 255, 218, 0.2)'
                      : 'rgba(14, 165, 233, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: mode === 'dark'
                      ? 'rgba(100, 255, 218, 0.4)'
                      : 'rgba(14, 165, 233, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton
                        size={isMobile ? "small" : "medium"}
                        onClick={() => imageInputRef.current?.click()}
                        sx={{
                          color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                          '&:hover': {
                            bgcolor: mode === 'dark'
                              ? 'rgba(100, 255, 218, 0.1)'
                              : 'rgba(14, 165, 233, 0.1)',
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <ImageIcon fontSize={isMobile ? "small" : "medium"} />
                      </IconButton>
                      <IconButton
                        size={isMobile ? "small" : "medium"}
                        onClick={() => fileInputRef.current?.click()}
                        sx={{
                          color: mode === 'dark' ? '#64ffda' : '#0ea5e9',
                          '&:hover': {
                            bgcolor: mode === 'dark'
                              ? 'rgba(100, 255, 218, 0.1)'
                              : 'rgba(14, 165, 233, 0.1)',
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <AttachFileIcon fontSize={isMobile ? "small" : "medium"} />
                      </IconButton>
                    </Box>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size={isMobile ? "small" : "medium"}
                      onClick={handleSend}
                      disabled={!message.trim()}
                      sx={{
                        color: message.trim()
                          ? mode === 'dark' ? '#64ffda' : '#0ea5e9'
                          : mode === 'dark'
                            ? 'rgba(100, 255, 218, 0.3)'
                            : 'rgba(14, 165, 233, 0.3)',
                        '&:hover': {
                          bgcolor: mode === 'dark'
                            ? 'rgba(100, 255, 218, 0.1)'
                            : 'rgba(14, 165, 233, 0.1)',
                          transform: 'scale(1.1)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <SendIcon fontSize={isMobile ? "small" : "medium"} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatSupport;