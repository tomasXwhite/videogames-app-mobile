import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    loading: false,
    favorites: null
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        setFavorites(state, { payload }) {
            state.favorites = payload;
        },
        setLoading(state, { payload }){
            state.loading = payload
        }
    }
})


export const {
    setFavorites,
    setLoading,
} = favoritesSlice.actions;

export default favoritesSlice.reducer