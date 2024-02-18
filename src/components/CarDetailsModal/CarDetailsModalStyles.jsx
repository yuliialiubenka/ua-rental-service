import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    modalBackdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: 'rgba(18, 20, 23, 0.5)',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        zIndex: 9999,
        overflowY: 'auto',
        padding: 20,
        '@media screen and (min-width: 768px)': {
            padding: '40px 20px',
        },
    },
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: 14,
        maxWidth: 541,
        width: '100%',
        height: 'fit-content',
        position: 'relative',

        '@media screen and (min-width: 768px)': {
            padding: 40,
            borderRadius: 24,
        },
    },
    closeButton: {
        position: 'absolute',
        top: 4,
        right: 4,
        fontSize: 24,
        lineHeight: 0.8,
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        transition: 'color 0.3s ease',
        '&:hover': {
          color: 'rgb(11, 68, 205)',
        },

        '@media screen and (min-width: 768px)': {
            top: 16,
            right: 16,
        },
    },
    carImage: {
        width: '100%',
        height: 'auto',
        maxHeight: 248,
        objectFit: 'cover',
        borderRadius: 14,
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        color: 'rgb(18, 20, 23)'
    },
    detailsContainerItem: {},
    detailsTitle: {
        display: 'block',
        fontWeight: 500,
        fontSize: 18,
        marginTop: 14,
        marginBottom: 9
    },
    detailsCategory: {
        display: 'block',
        fontWeight: 500,
        fontSize: 14,
        marginBottom: 8
    },
    detailsAccent: {
        color: 'rgb(52, 112, 255)',
    },
    detailsWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,

        '& + $detailsWrap': {
            marginTop: 4,
        }
    },
    detailsWrapItem: {
        fontSize: 12,
        lineHeight: 1.5,
        color: 'rgba(18, 20, 23, 0.5)',
        borderRight: '1px solid rgba(18, 20, 23, 0.1)',
        paddingRight: 6,

        '&:last-child':{
            borderRight: 'none',
            paddingRight: 0,
        }
    },
    detailsDesc: {
        marginTop: 14,
        fontSize: 14,
        lineHeight: 1.4
    },
    rentalConditions: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
    },
    rentalConditionsItem: {
        background: 'rgb(249, 249, 249)',
        padding: '7px 14px',
        fontSize: 12,
        color: 'rgb(54, 53, 53)',
        borderRadius: 35,

        "& span": {
            fontWeight: 600
        }
    },
    rentalButton: {
        display: 'inline-block',
        width: 'fit-content',
        padding: '12px 50px',
        backgroundColor: 'rgb(52, 112, 255)',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: 12,
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgb(11, 68, 205)',
        },
    },
});

export default useStyles;