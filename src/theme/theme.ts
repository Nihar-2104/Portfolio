import { createTheme, Theme, alpha } from '@mui/material';
import { PaletteMode } from '@mui/material';

const getTheme = (mode: PaletteMode): Theme => {
  const isDark = mode === 'dark';

  const getColor = (lightColor: string, darkColor: string) => 
    isDark ? darkColor : lightColor;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#64ffda',
        light: '#95ffe2',
        dark: '#14b8a6',
      },
      secondary: {
        main: '#0ea5e9',
        light: '#38bdf8',
        dark: '#0284c7',
      },
      background: {
        default: getColor('#f8fafc', '#0a192f'),
        paper: getColor('#ffffff', '#112240'),
      },
      text: {
        primary: getColor('#1e293b', '#ccd6f6'),
        secondary: getColor('#64748b', '#8892b0'),
      },
      divider: getColor('rgba(0, 0, 0, 0.12)', 'rgba(255, 255, 255, 0.12)'),
    },
    typography: {
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.2,
        color: getColor('#1e293b', '#ccd6f6'),
        '@media (max-width:600px)': {
          fontSize: '2.5rem',
        },
      },
      h2: {
        fontWeight: 700,
        fontSize: '2.75rem',
        lineHeight: 1.2,
        color: getColor('#1e293b', '#ccd6f6'),
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h3: {
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.3,
        color: getColor('#1e293b', '#ccd6f6'),
        '@media (max-width:600px)': {
          fontSize: '1.75rem',
        },
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.4,
        color: getColor('#1e293b', '#ccd6f6'),
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.5,
        color: getColor('#1e293b', '#ccd6f6'),
      },
      h6: {
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1.6,
        color: getColor('#1e293b', '#ccd6f6'),
      },
      subtitle1: {
        fontSize: '1.125rem',
        lineHeight: 1.75,
        color: getColor('#64748b', '#8892b0'),
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.75,
        color: getColor('#1e293b', '#ccd6f6'),
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            colorScheme: mode,
          },
          body: {
            transition: 'background-color 0.3s ease, color 0.3s ease',
            backgroundColor: getColor('#f8fafc', '#0a192f'),
            color: getColor('#1e293b', '#ccd6f6'),
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: getColor('#ffffff', '#112240'),
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: getColor('#ffffff', '#112240'),
            borderRadius: 12,
            transition: 'all 0.3s ease-in-out',
            boxShadow: isDark 
              ? '0 4px 20px rgba(0,0,0,0.4)'
              : '0 4px 20px rgba(0,0,0,0.1)',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: isDark 
                ? '0 8px 30px rgba(0,0,0,0.5)'
                : '0 8px 30px rgba(0,0,0,0.15)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 20px 0 rgba(0,0,0,0.1)',
            },
          },
          outlined: {
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 6,
            fontWeight: 500,
            backgroundColor: isDark ? 'rgba(100,255,218,0.1)' : 'rgba(100,255,218,0.2)',
            color: isDark ? '#64ffda' : '#0a192f',
            '&:hover': {
              backgroundColor: isDark ? 'rgba(100,255,218,0.2)' : 'rgba(100,255,218,0.3)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: alpha(getColor('#ffffff', '#0a192f'), 0.8),
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid',
            borderColor: getColor('rgba(0,0,0,0.1)', 'rgba(255,255,255,0.1)'),
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: getColor('#ffffff', '#0a192f'),
            borderColor: getColor('rgba(0,0,0,0.1)', 'rgba(255,255,255,0.1)'),
          },
        },
      },
    },
  });
};

export default getTheme; 