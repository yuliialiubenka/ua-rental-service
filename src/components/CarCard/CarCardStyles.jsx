import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  carCard: {
    width: '100%',

    '@media screen and (min-width: 576px)': {
      width: 'calc((100% - 20px)/2)',
    },

    '@media screen and (min-width: 768px)': {
      width: 'calc((100% - 40px)/3)',
    },

    '@media screen and (min-width: 1024px)': {
      width: 'calc((100% - 60px)/4)',
    },

    '@media screen and (min-width: 1200px)': {
      width: 'calc((100% - 87px)/4)',
    }
  },
  imgWrap: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: '8px',
    position: 'relative'
  },
  img: {
    width: '100%',
    minHeight: 268,
    borderRadius: 14,
    objectFit: 'cover',
  },
  cardContent: {
    margin: '14px 0 28px 0'
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    display: 'flex',
    justifyContent: 'space-between',
  },
  detailsAccent: {
    color: 'rgb(52, 112, 255)',
  },
  titleName: {
  },
  titlePrice: {
  },
  details: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 1.7,
    color: 'rgba(18, 20, 23, 0.5)',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',

    '& span': {
      display: 'inline-block',
      height: 16,
      width: 1,
      background: 'rgba(18, 20, 23, 0.5)',
      margin: '0 6px',
      transform: 'translateY(3px)'
    }
  },
  button: {
    padding: '12px 20px',
    backgroundColor: 'rgb(52, 112, 255)',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    width: '100%',
    cursor: 'pointer',
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.4,
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgb(11, 68, 205)',
    },
  },
});
