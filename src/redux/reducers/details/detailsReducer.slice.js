import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    details: null,
    screenshots: []
};

const videogamesSlice = createSlice({
    name: "details",
    initialState,
    reducers: {
        getDetails(state, { payload }) {
            state.details = payload;
        },
        getScreenshots(state, { payload }){
            state.screenshots = payload
        },
        clearDetails(state, { payload }){
            state.screenshots = []
            state.details = null
        }
    }
})


export const {
    getDetails,
    getScreenshots,
    clearDetails
} = videogamesSlice.actions;

export default videogamesSlice.reducer