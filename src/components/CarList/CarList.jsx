import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCars, selectFavoriteCars } from '../../redux/selectors/carSelectors';
import { useStyles } from './CarListStyles';
import EmptyBlock from '../EmptyBlock/EmptyBlock';
import CarCard from '../CarCard/CarCard';

const CarList = () => {
  const classes = useStyles();
  const cars = useSelector(selectAllCars);
  const favoriteCars = useSelector(selectFavoriteCars);
  const isFavoriteCar = (car) => favoriteCars.some(favoriteCar => favoriteCar.id === car.id);

  if (!cars || cars.length === 0) {
    return <EmptyBlock />;
  }

  return (
    <ul className={classes.carList}>
      {cars?.map(car => (
        <CarCard key={car.id} car={car} isFavorite={isFavoriteCar(car)} />
      ))}
    </ul>
  );
};

export default CarList;
