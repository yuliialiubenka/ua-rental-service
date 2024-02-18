import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useStyles } from './FavoriteIconStyles';

const FavoriteIcon = ({ isFavorite, onClick }) => {
    const classes = useStyles();
    return (
        <>
            {isFavorite ? (
                <FaHeart
                    onClick={onClick}
                    className={`${classes.favoriteIcon} ${classes.favoriteIconActive}`}
                />
            ) : (
                <FaRegHeart
                    onClick={onClick}
                    className={classes.favoriteIcon}
                />
            )}
        </>
    );
};

export default FavoriteIcon;