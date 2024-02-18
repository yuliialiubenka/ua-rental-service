import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://65cbc41eefec34d9ed880fbf.mockapi.io';

export const paramsForNotify = {
  position: 'center-bottom',
  distance: '16px',
  timeout: 3000,
  width: 'fit-content',
  fontSize: '16px',
  borderRadius: '10px',
  showOnlyTheLastOne: true,
  fontFamily: 'Manrope',
  cssAnimationStyle: 'from-bottom',
  fontAwesomeIconSize: '20px',
};

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async ({ pageNumber, clearState }, thunkAPI) => {
    if (clearState === true) {
      pageNumber = 1;
    }
    try {
      const response = await axios.get('/advert', {
        params: {
          page: pageNumber,
          limit: 12,
        },
      });
      return response.data;
    } catch (error) {
      Notify.failure(
        'Failed to fetch cars. Please try again later.',
        paramsForNotify
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNextPage = createAsyncThunk(
  'cars/fetchNextPage',
  async (pageNumber, thunkAPI) => {
    try {
      const response = await axios.get('/advert', {
        params: {
          page: pageNumber + 2,
          limit: 12,
        },
      });
      const newData = await response.data;
      return newData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredCars = createAsyncThunk(
  'cars/fetchFilteredCars',
  async (filterParams, thunkAPI) => {
    try {
      const response = await axios.get('/advert', {
        params: filterParams,
      });
      return response.data;
    } catch (error) {
      Notify.failure(
        'Failed to fetch filtered cars. Please try again later.',
        paramsForNotify
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteCar = car => {
  return {
    type: 'cars/addFavoriteCar',
    payload: car,
  };
};

export const removeFavoriteCar = carId => {
  return {
    type: 'cars/removeFavoriteCar',
    payload: carId,
  };
};
