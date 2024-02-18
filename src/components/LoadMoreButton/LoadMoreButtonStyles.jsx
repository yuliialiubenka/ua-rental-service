import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  button: {
    display: 'block',
    fontSize: 16,
    fontWeight: 500,
    margin: '64px auto 0 auto',
    color: 'rgb(52, 112, 255)',
    border: 'none',
    background: 'transparent',
    textDecoration: 'underline',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'rgb(11, 68, 205)',
    },

    '@media screen and (min-width: 768px)': {
      margin: '100px auto 0 auto',
    },
  },
});