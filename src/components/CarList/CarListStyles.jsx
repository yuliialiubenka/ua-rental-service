import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    carList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
    
        '@media screen and (min-width: 1200px)': {
        gap: 29,
        }
    },
});