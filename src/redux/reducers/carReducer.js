import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchFilteredCars } from '../actions/carActions';

const initialState = {
  cars: [],
  favoriteCars: [],
  isLoading: false,
  isFiltered: false,
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addFavoriteCar: (state, action) => {
      const carToAdd = action.payload;
      const isAlreadyFavorite = state.favoriteCars.some(
        favoriteCar => favoriteCar.id === carToAdd.id
      );
      if (!isAlreadyFavorite) {
        state.favoriteCars.push(carToAdd);
      }
    },
    removeFavoriteCar: (state, action) => {
      const carIdToRemove = action.payload;
      state.favoriteCars = state.favoriteCars.filter(
        favoriteCar => favoriteCar.id !== carIdToRemove
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
        if (!action.meta.arg.clearState) {
          state.error = null;
        }
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isFiltered = false;
        if (!action.meta.arg.clearState) {
          state.cars = [...state.cars, ...action.payload];
        } else {
          state.cars = action.payload;
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchFilteredCars.pending, (state, action) => {
        state.isLoading = true;
        state.cars = [];
      })
      .addCase(fetchFilteredCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
        state.isFiltered = true;
      })
      .addCase(fetchFilteredCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addFavoriteCar, removeFavoriteCar } = carSlice.actions;

export default carSlice.reducer;
