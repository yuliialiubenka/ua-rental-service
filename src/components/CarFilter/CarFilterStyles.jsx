import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    margin: '0 auto 30px auto',

    '@media screen and (min-width: 576px)': {
      width: 'fit-content',
      gap: 18,
    },
  },
  dropdownContainer: {
    position: 'relative',
    width: 'auto',

    '@media screen and (min-width: 576px)': {
      width: 224,
    },
  },
  input: {
    width: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    padding: '12px 30px 12px 18px',
    fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: 500,
    color: 'rgb(18, 20, 23)',
    lineHeight: 1.1,

    '@media screen and (min-width: 576px)': {
      fontSize: 18,
    },
  },
  inputSelect: {
    display: 'flex',
    borderRadius: 14,
    border: 'none',
    backgroundColor: 'rgb(247, 247, 251)',
    appearance: 'none',
    height: '100%',
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  },
  arrowIcon: {
    width: 20,
    height: 20
  },
  dropdownMenu: {
    maxHeight: 272,
    position: 'absolute',
    top: 'calc(100% + 4px)',
    left: 0,
    width: '100%',
    borderRadius: 14,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    zIndex: 1,
    padding: 12
  },
  dropdownMenuContent: {
    overflowY: 'auto',
    maxHeight: 240,
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(18, 20, 23, 0.05)',
    '&::-webkit-scrollbar': {
      width: 8,
      borderRadius: 10,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(18, 20, 23, 0.05)',
    },
    '&::-moz-scrollbar': {
      width: 8,
      borderRadius: 10,
    },
    '&::-moz-scrollbar-thumb': {
      backgroundColor: 'rgba(18, 20, 23, 0.05)',
    },
  },
  dropdownItem: {
    fontWeight: 500,
    fontSize: 16,
    padding: 4,
    cursor: 'pointer',
    color: 'rgba(18, 20, 23, 0.2)',
    '&:hover': {
      backgroundColor: 'rgb(247, 247, 251)',
      color: 'rgb(18, 20, 23)',
    },
  },
  searchButton: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'rgb(52, 112, 255)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.4,
    '&:hover': {
      backgroundColor: 'rgb(11, 68, 205)',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },

    '@media screen and (min-width: 576px)': {
      padding: '12px 44px 12px 44px',
    },
  },

  resetButton: {
    backgroundColor: 'transparent',
    color: 'rgb(52, 112, 255)',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'rgb(11, 68, 205)',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },

  resetButtonIcon: {
    width: 32,
    height: 32,

    '@media screen and (min-width: 576px)': {
      width: 40,
      height: 40,
    },
  },

  selectedItem: {
    color: 'rgb(18, 20, 23)'
  }
});
