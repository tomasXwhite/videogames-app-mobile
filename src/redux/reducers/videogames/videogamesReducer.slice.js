import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    games: [],
    loading: false,
    moreLoading: false,
    error: null,
    moreError: null,
    isListEnd: false,
};

const videogamesSlice = createSlice({
    name: "videogames",
    initialState,
    reducers: {
        getGames(state, { payload }) {
            if (state.games[state.games.length - 1]?.id !== payload[payload.length - 1].id || state.games[state.games.length - 2]?.id !== payload[payload.length - 2].id || state.games[0]?.id !== payload[0].id) {
                state.games = [...state.games, ...payload];
                state.error = ''
                state.loading = false
                state.moreLoading = false
            }

        },
        apiRequest(state, { payload }) {
            //le llega la pag
            if (payload === 1) state.loading = true
            else state.moreLoading = true
        },
        apiFailure(state, { payload }) {
            //le llega el error
            state.error = payload
            state.loading = false
            state.moreLoading = false
        },
        apiListEnd(state, { payload }) {
            //le llega el error
            state.isListEnd = true
            state.loading = false
            state.moreLoading = false
        }
    }
})


export const {
    getGames,
    apiRequest,
    apiListEnd,
    apiFailure

} = videogamesSlice.actions;

export default videogamesSlice.reducer