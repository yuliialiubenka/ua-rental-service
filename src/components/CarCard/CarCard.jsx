import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavoriteCar, removeFavoriteCar } from '../../redux/actions/carActions';
import { useStyles } from './CarCardStyles';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import CarDetailsModal from '../CarDetailsModal/CarDetailsModal';
import Image from "../../img/no-photo.jpg";

const CarCard = ({ car, isFavorite }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    img,
    make,
    id,
    model,
    type,
    year,
    rentalPrice,
    address,
    rentalCompany,
    functionalities,
  } = car;

  const makeFirstWord = make.split(' ')[0];
  const modelFirstWord = (makeFirstWord.length + model.split(' ')[0].length > 20) ? '' : model.split(' ')[0];
  const addressWords = address.split(',');
  const city = addressWords[1].trim();
  const country = addressWords[2] ? addressWords[2].trim() : '';
  const firstFunctionality = functionalities[0];

  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavoriteState(!isFavoriteState);

    if (!isFavoriteState) {
      dispatch(addFavoriteCar(car));
    } else {
      dispatch(removeFavoriteCar(car.id));
    }
  };

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <li className={classes.carCard}>
      <div className={classes.imgWrap}>
        <img className={classes.img} src={img ? img : Image} alt={make}/>
        <FavoriteIcon isFavorite={isFavoriteState} onClick={handleFavoriteToggle} />
      </div>
      <div className={classes.cardContent}>
        <div className={classes.title}>
          <p className={classes.titleName}>{makeFirstWord} <span className={classes.detailsAccent}>{modelFirstWord}</span>, {year}</p>
          <p className={classes.titlePrice}>{rentalPrice}</p>
        </div>
        <div className={classes.details}>
          {city}<span></span> 
          {country}<span></span> 
          {rentalCompany} <br/> 
          {type}<span></span> 
          {id}<span></span> 
          {firstFunctionality}
        </div> 
      </div>
      <button className={classes.button} onClick={handleLearnMore}>Learn more</button>
      {isModalOpen && (
        <CarDetailsModal car={car} onClose={handleCloseModal} />
      )}
    </li>
  );
};

export default CarCard;
