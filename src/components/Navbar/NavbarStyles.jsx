import { createUseStyles } from 'react-jss';
import bgImg from '../../img/car-rental-services.png';

export const useStyles = createUseStyles({
  navbar: {
    padding: '10px 0',
    display: 'none',
    '@media screen and (min-width: 768px)': {
      height: 'auto',
      display: 'block',
    }
  },
  navbarOpen: {
    display: 'block',
    height: 'calc(100vh - 68px)',
    top: 68,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'fixed',
    background: '#fff',
    zIndex: 11,

    '&:before': {
      content: '""',
      backgroundImage: `url(${bgImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      backgroundPositionX: 'left',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: -1
    }
  },
  navList: {
    listStyle: 'none',
    margin: '20% 0 0 0',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,

    '@media screen and (min-width: 768px)': {
      margin: 0,
      flexDirection: 'row',
    }
  },
  navItem: {
    marginBottom: '10px',
    '@media screen and (min-width: 768px)': {
      marginBottom: 0,
    }

  },
  navLink: {
    color: '#0B44CD',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    padding: 12,
    borderRadius: 12,

    '@media screen and (min-width: 768px)': {
      color: '#fff',
    },

    '&.active': {
      color: '#fff',
      background: '#0B44CD',

      '@media screen and (min-width: 768px)': {
        color: '#0B44CD',
        background: '#fff',
      },

      '&:hover': {
        color: 'rgb(247, 247, 251, 0.7)',

        '@media screen and (min-width: 768px)': {
          color: 'rgb(11, 68, 205, 0.7)',
        },
      }
    },
    
    '&:hover': {
      color: 'rgb(11, 68, 205, 0.7)',

      '@media screen and (min-width: 768px)': {
        color: 'rgb(247, 247, 251, 0.7)',
      },
    }
  },
});

