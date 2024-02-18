import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFiltered } from '../../redux/selectors/carSelectors';
import { fetchFilteredCars, fetchCars } from '../../redux/actions/carActions';
import { useStyles } from './CarFilterStyles';
import { BiChevronDown, BiChevronUp, BiReset } from 'react-icons/bi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { paramsForNotify } from '../../redux/actions/carActions';

const CarFilter = () => {
  const classes = useStyles();
  const [selectedBrand, setSelectedBrand] = useState('');
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const isFiltered = useSelector(selectIsFiltered);
  const isValidBrand = brands.some(brand => brand.toLowerCase() === selectedBrand.toLowerCase());
  
  const handleSearch = () => {
    setIsBrandDropdownOpen(false);

    if (!isValidBrand) {
      Notify.info('Brand not found in the list. Please select from the available brands.', paramsForNotify);
      setSelectedBrand('');
      return;
    }

    const filters = {
      make: selectedBrand || null,
    };

    dispatch(fetchFilteredCars(filters));
    setSelectedBrand('');
  };

  const handleReset = () => {
    setSelectedBrand('');
    dispatch(fetchCars({ clearState: true }));
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.trim();
    setSelectedBrand(inputValue);

    const isValidBrand = inputValue && brands.some(brand => 
      brand.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  
    if (!isValidBrand) {
      setIsBrandDropdownOpen(false);
    } else {
      setIsBrandDropdownOpen(true);
    }
  };

  const handleOutsideClick = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setIsBrandDropdownOpen(false);
    }
  };

  const handleEscapePress = (e) => {
    if (e.key === 'Escape') {
      setIsBrandDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapePress);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, []);

  const dropdownRef = useRef(null);

  return (
    <div className={classes.filterContainer} ref={dropdownRef}>
      <div className={classes.dropdownContainer}>
        <div className={classes.inputSelect} onClick={() => setIsBrandDropdownOpen(true)}>
          <input
            type="text"
            onChange={handleInputChange}
            onFocus={() => setIsBrandDropdownOpen(true)}
            placeholder="Enter the brand"
            value={selectedBrand}
            className={classes.input}
          />
          <span className={classes.arrow}>
            { isBrandDropdownOpen ? 
              <BiChevronUp className={classes.arrowIcon} /> : 
              <BiChevronDown className={classes.arrowIcon} /> 
            }
          </span>
        </div>
        {isBrandDropdownOpen && (
          <div className={classes.dropdownMenu}>
            <div className={classes.dropdownMenuContent}>
              {brands
                .filter(brand => brand.toLowerCase().includes(selectedBrand.toLowerCase()))
                .map(make => (
                <div
                  tabIndex={0}
                  key={make}
                  className={`${classes.dropdownItem} ${isValidBrand ? classes.selectedItem : ''}`}
                  onClick={() => {
                    setSelectedBrand(make);
                    setIsBrandDropdownOpen(false);
                  }}
                >
                  {make}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <button className={classes.searchButton} onClick={handleSearch} disabled={!selectedBrand}>Search</button>
      {isFiltered &&
        <button className={classes.resetButton} onClick={handleReset}>
        <BiReset className={classes.resetButtonIcon} />
      </button>
      }
    </div>
  );
};

export default CarFilter;

const brands = [
  "Buick", "Volvo", "HUMMER", "Subaru", "Mitsubishi", "Nissan", "Lincoln", 
  "GMC", "Hyundai", "MINI", "Bentley", "Mercedes-Benz", "Aston Martin", 
  "Pontiac", "Lamborghini", "Audi", "BMW", "Chevrolet",
  "Chrysler", "Kia", "Land"
];
