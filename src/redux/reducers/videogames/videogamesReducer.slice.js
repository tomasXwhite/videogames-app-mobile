import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    games: [],
    payments: []
};

const videogamesSlice = createSlice({
    name: "videogames",
    initialState,
    reducers: {
        getGames(state, { payload }) {
            state.games = payload;
        },
    }
})


export const {
    getGames,
} = videogamesSlice.actions;

export default videogamesSlice.reducer