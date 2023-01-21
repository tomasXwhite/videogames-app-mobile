import { configureStore } from '@reduxjs/toolkit';
import videogamesReducerSlice from '../reducers/videogames/videogamesReducer.slice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import detailsReducerSlice from '../reducers/details/detailsReducer.slice';
import favoritesReducerSlice from '../reducers/favorites/favoritesReducer.slice';

export const store = configureStore({
    reducer: {
        videogames: videogamesReducerSlice,
        details: detailsReducerSlice,
        favorites: favoritesReducerSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
});