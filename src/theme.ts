import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7FA1',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '&.index-card': {
            borderRadius: '0.375rem', // 6px
            border: '0.063rem solid', // 1px
            borderColor: '#D9D9D9',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          '&.index-card-content': {
            padding: 0,
            justifyContent: 'space-between',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          height: '100%',
          '&.patientName': {
            fontSize: '0.75rem',
            color: 'white',
            paddingLeft: '.5rem',
            paddingTop: '.5rem',
            paddingBottom: '.25rem',
          },
          '&.index-card-description': {
            color: '#1F1F1F',
            fontSize: '1.125rem', // 18px
            fontWeight: 'bold',
            paddingTop: '0.75rem', // 12px
            paddingLeft: '1rem', // 16px
            paddingBottom: '0.75rem', // 12px
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          },
        },
      },
    },    
    MuiTabs: {
      styleOverrides: {
        root: {
          fontFamily: 'Lato, sans-serif',
        },
        indicator: {
          top: 0, // Position the indicator at the top
          bottom: 'unset', // Unset the bottom position
          height: '0.125rem', // Set the height of the indicator
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Lato, sans-serif',
          fontSize: '1.25rem',
          textTransform: 'none', 
          '&.Mui-selected': {
            color: 'black', 
            fontWeight: 'bold', 
            borderTop: '0.125rem solid #CCCCCC', 
            borderLeft: '0.063rem solid #CCCCCC', 
            borderRight: '0.063rem solid #CCCCCC', 
            borderBottom: '0.25rem solid #FFFFFF', //thicker border to overlap line
          },
        },
      },
    },
  },
});

export default theme;