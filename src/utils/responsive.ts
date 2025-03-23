import { Theme } from '@mui/material/styles';

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const isMobile = (theme: Theme) => theme.breakpoints.down('sm');
export const isTablet = (theme: Theme) => theme.breakpoints.between('sm', 'md');
export const isDesktop = (theme: Theme) => theme.breakpoints.up('md');

export const mobileSpacing = {
  section: { 
    py: { xs: 8, sm: 10, md: 12 },
    scrollMarginTop: { xs: 56, sm: 64, md: 64 }
  },
  container: { 
    px: { xs: 2, sm: 3, md: 4 },
    maxWidth: { xs: '100%', sm: '540px', md: '720px', lg: '1140px' }
  },
  gridSpacing: { xs: 2, sm: 3, md: 4 },
  cardPadding: { p: { xs: 2, sm: 3, md: 4 } },
  gap: {
    xs: 2,
    sm: 3,
    md: 4
  }
};

export const responsiveText = {
  h1: {
    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
    lineHeight: { xs: 1.2, sm: 1.2, md: 1.3 },
    letterSpacing: { xs: '-0.02em', sm: '-0.02em', md: '-0.03em' }
  },
  h2: {
    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
    lineHeight: { xs: 1.2, sm: 1.2, md: 1.3 },
    letterSpacing: { xs: '-0.02em', sm: '-0.02em', md: '-0.02em' }
  },
  h3: {
    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' },
    lineHeight: { xs: 1.2, sm: 1.2, md: 1.3 },
    letterSpacing: { xs: '-0.01em', sm: '-0.01em', md: '-0.02em' }
  },
  subtitle1: {
    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem', lg: '1.375rem' },
    lineHeight: { xs: 1.6, sm: 1.6, md: 1.8 },
    letterSpacing: { xs: '0.01em', sm: '0.01em', md: '0.02em' }
  },
  body1: {
    fontSize: { xs: '0.875rem', sm: '1rem', md: '1.1rem', lg: '1.125rem' },
    lineHeight: { xs: 1.6, sm: 1.6, md: 1.8 },
    letterSpacing: { xs: '0.01em', sm: '0.01em', md: '0.01em' }
  },
  body2: {
    fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '1rem', lg: '1rem' },
    lineHeight: { xs: 1.6, sm: 1.6, md: 1.8 },
    letterSpacing: { xs: '0.01em', sm: '0.01em', md: '0.01em' }
  },
  button: {
    fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
    padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' }
  },
  icon: {
    size: { xs: 20, sm: 24, md: 28 }
  }
};