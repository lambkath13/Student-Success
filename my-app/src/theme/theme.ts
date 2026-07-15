import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accentPurple: Palette['primary'];
    accentOrange: Palette['primary'];
  }
  interface PaletteOptions {
    accentPurple?: PaletteOptions['primary'];
    accentOrange?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563EB',
      dark: '#1D4ED8',
      light: '#3B82F6',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8B5CF6',
      dark: '#7C3AED',
      light: '#A78BFA',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#10B981',
      dark: '#059669',
      light: '#34D399',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F59E0B',
      dark: '#D97706',
      light: '#FBBF24',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#EF4444',
      dark: '#DC2626',
      light: '#F87171',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#64748B',
    },
    divider: '#E2E8F0',
    accentPurple: {
      main: '#8B5CF6',
      dark: '#7C3AED',
      light: '#A78BFA',
      contrastText: '#FFFFFF',
    },
    accentOrange: {
      main: '#F59E0B',
      dark: '#D97706',
      light: '#FBBF24',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
    h2: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
    h3: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
    h4: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontWeight: 700 },
    h6: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontWeight: 700 },
    body1: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
    body2: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      textTransform: 'none',
      fontWeight: 500,
    },
    caption: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
    overline: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
    subtitle1: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
    subtitle2: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          backgroundColor: '#F8FAFC',
        },
        '*': {
          boxSizing: 'border-box',
        },
        '#root': {
          minHeight: '100vh',
          width: '100%',
          maxWidth: '100%',
          margin: 0,
          textAlign: 'initial',
          border: 'none',
          display: 'block',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06)',
          border: '1px solid #E2E8F0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        },
      },
    },
  },
});

export default theme;
