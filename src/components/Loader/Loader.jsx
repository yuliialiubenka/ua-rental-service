import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors/carSelectors';
import { useStyles } from './LoaderStyles';
import Image from '../../img/wheel.svg';

const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  const classes = useStyles();

  return (
    isLoading && (
      <div className={classes.loaderOverlay}>
        <div className={classes.loaderContainer}>
            <img src={Image} className={classes.loader} alt="Loader" />
        </div>
      </div>
    )
  );
};

export default Loader;
