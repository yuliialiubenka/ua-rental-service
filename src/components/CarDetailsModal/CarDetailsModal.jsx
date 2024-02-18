import React, { useEffect } from 'react';
import { useStyles } from './CarDetailsModalStyles';
import Image from "../../img/no-photo.jpg";

const CarDetailsModal = ({ car, onClose }) => {
  const classes = useStyles();
  const {
    img,
    make,
    id,
    mileage,
    model,
    type,
    year,
    description,
    rentalPrice,
    rentalConditions,
    address,
    accessories,
    functionalities,
    fuelConsumption,
    engineSize
  } = car;

  const addressWords = address.split(',');
  const city = addressWords[1].trim();
  const country = addressWords[2] ? addressWords[2].trim() : '';
  const conditionsArray = rentalConditions.split('\n');
  const price = parseInt(rentalPrice.substring(1));
  const formattedMileage = mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  let minimumAge = null;
  let conditions = [];

  conditionsArray.forEach((condition) => {
    if (condition.includes('Minimum age')) {
        const ageString = condition.split(':')[1].trim();
        minimumAge = parseInt(ageString, 10);
    } else {
        conditions.push(condition);
    }
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    <div className={classes.modalBackdrop} onClick={onClose}>
      <div className={classes.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button className={classes.closeButton} onClick={onClose}>×</button>
        <img src={img ? img : Image} alt={`${make} ${model}`} className={classes.carImage} />
        <div className={classes.detailsContainer}>
          <div className={classes.detailsContainerItem}>
            <strong className={classes.detailsTitle}>{make} <span className={classes.detailsAccent}>{model}</span>, {year}</strong>
            <p className={classes.detailsWrap}>
              <span className={classes.detailsWrapItem}>{city}</span> 
              <span className={classes.detailsWrapItem}>{country}</span>
              <span className={classes.detailsWrapItem}>Id: {id}</span> 
              <span className={classes.detailsWrapItem}>Year: {year}</span> 
              <span className={classes.detailsWrapItem}>Type: {type}</span>
            </p>
            <p className={classes.detailsWrap}>
              <span className={classes.detailsWrapItem}>Fuel Consumption: {fuelConsumption}</span>
              <span className={classes.detailsWrapItem}>Engine Size: {engineSize}</span>
            </p>
            <p className={classes.detailsDesc}>{description}</p>
          </div>
          <div className={classes.detailsContainerItem}>
            <strong className={classes.detailsCategory}>Accessories and functionalities:</strong>
            <p className={classes.detailsWrap}>
              {accessories.map((accessory, index) => (
                <span className={classes.detailsWrapItem} key={index}>{accessory}</span>
              ))}
            </p>
            <p className={classes.detailsWrap}>
              {functionalities.map((functionality, index) => (
                <span className={classes.detailsWrapItem} key={index}>{functionality}</span>
              ))}
            </p>
          </div>
          <div className={classes.detailsContainerItem}>
            <strong className={classes.detailsCategory}>Rental Conditions:</strong>
            <div className={classes.rentalConditions}>
              {minimumAge && <p className={classes.rentalConditionsItem}>Minimum age: <span className={classes.detailsAccent}>{minimumAge}</span></p>}
              {conditions.map((condition, index) => (
                <p className={classes.rentalConditionsItem} key={index}>{condition}</p>
              ))}
              <p className={classes.rentalConditionsItem}>Mileage: <span className={classes.detailsAccent}>{formattedMileage}</span></p>
              <p className={classes.rentalConditionsItem}>Price: <span className={classes.detailsAccent}>{price}$</span></p>
            </div>
          </div>

          <a href="tel:+380730000000" className={classes.rentalButton}>Rental car</a>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsModal;
