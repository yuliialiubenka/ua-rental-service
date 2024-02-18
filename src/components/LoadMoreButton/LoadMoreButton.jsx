import React from 'react';
import { useStyles } from './LoadMoreButtonStyles';

const LoadMoreButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <button className={classes.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
