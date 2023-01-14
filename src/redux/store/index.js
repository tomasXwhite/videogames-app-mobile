import { configureStore } from '@reduxjs/toolkit';
import videogamesReducerSlice from '../reducers/videogames/videogamesReducer.slice';

export const store = configureStore({
    reducer: {
        videogames: videogamesReducerSlice
    }
});