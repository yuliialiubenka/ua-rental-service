import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  footer: {
    backgroundColor: '#0B44CD',
    padding: '20px 0',
    textAlign: 'center',
    width: '100%',
    boxShadow:'0 -2px 10px rgba(0, 0, 0, 0.5)'
  },
  footerContent: {
    fontSize: 14,
  },
  footerText: {
    color: '#fff',
    fontWeight: 500,
    '& + $footerText': {
      marginTop: 8,
    }
  }
});
