import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    favoriteIcon: {
        cursor: 'pointer',
        position: 'absolute',
        top: 14,
        right: 14,
        color: '#fff',
    },
    favoriteIconActive: {
        color: '#3470FF',
    },
});