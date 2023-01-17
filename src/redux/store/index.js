import { configureStore } from '@reduxjs/toolkit';
import videogamesReducerSlice from '../reducers/videogames/videogamesReducer.slice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import detailsReducerSlice from '../reducers/details/detailsReducer.slice';

export const store = configureStore({
    reducer: {
        videogames: videogamesReducerSlice,
        details: detailsReducerSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
});