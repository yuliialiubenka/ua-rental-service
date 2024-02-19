import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/selectors/carSelectors';
import { useStyles } from './FavoritesListStyles';
import CarCard from '../CarCard/CarCard';
import EmptyBlock from '../EmptyBlock/EmptyBlock';

const FavoritesList = ({ visibleCars }) => {
  const classes = useStyles();
  const favoriteCars = useSelector(selectFavoriteCars);
  const isFavoriteCar = (car) => favoriteCars.some(favoriteCar => favoriteCar.id === car.id);

  if (!favoriteCars || favoriteCars.length === 0) {
    return <EmptyBlock />;
  }

  return (
    <ul className={classes.favoritesList}>
      {favoriteCars.slice(0, visibleCars)?.map(car => (
        <CarCard key={car.id} car={car} isFavorite={isFavoriteCar(car)}/>
      ))}
    </ul>
  );
};

export default FavoritesList;
