import React from 'react';
import { useStyles } from './HomeContentStyles';

const HomeContent = () => {
    const classes = useStyles();

    return (
      <div className={classes.mainWrapper}>
        <h1 className={classes.heading}>Welcome to UA Rental Service</h1>
        <ul className={classes.descriptionWrap}>
          <li className={classes.description}>We offer a wide range of vehicles for rent to suit your needs.</li>
          <li className={classes.description}>Whether you need a car for a business trip, vacation, or daily commute, we've got you covered.</li>
          <li className={classes.description}>Explore our catalog to find the perfect vehicle for your next adventure!</li>
        </ul>
      </div>
    );
};

export default HomeContent;