import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoviesState {
  favourites: number[];
}

const initialState: MoviesState = {
  favourites: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<number>) => {},
  },
});

export const { toggleFavourite } = moviesSlice.actions;
export default moviesSlice.reducer;
