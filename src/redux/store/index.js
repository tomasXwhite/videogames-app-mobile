import { configureStore } from '@reduxjs/toolkit';
import videogamesReducerSlice from '../reducers/videogames/videogamesReducer.slice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        videogames: videogamesReducerSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
});