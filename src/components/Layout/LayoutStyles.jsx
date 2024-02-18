import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    container: {
        flex: '1',
        maxWidth: 1224,
        width: '100%',
        padding: '20px 20px 64px 20px',
        margin: '0 auto',

        '@media screen and (min-width: 768px)': {
            padding: '30px 20px 150px 20px',
        },
    },
});
