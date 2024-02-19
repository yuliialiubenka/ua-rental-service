import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  header: {
    backgroundColor: '#0B44CD',
    height: 68,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
  },
  container: {
    margin: '0 auto',
    padding: '10px 20px',
    maxWidth: 1224,
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 64,
    fontWeight: 700,
    lineHeight: 0.5,
    textDecoration: "none",
    color: '#fff',
  },
  logo: {
    maxWidth: '48px',
    width: '100%',
    height: '100%',
    animation: '$spin 8s linear infinite',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  mobileMenuToggle: {
    background: 'transparent',
    padding: 7,
    border: 0,
    color: '#fff',
    cursor: 'pointer',

    '@media (min-width: 768px)': {
      display: 'none',
    }
  },
  mobileMenuToggleIcon: {
    width: 32,
    height: 32,
  }
});
