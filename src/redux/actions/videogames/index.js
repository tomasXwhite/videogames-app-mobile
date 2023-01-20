// import { apiConnection } from "../../utils/axios";
import axios from "axios";
import { getGames, apiRequest, apiListEnd, apiFailure, resetGames } from "../../reducers/videogames/videogamesReducer.slice";


export const getGamesAction = (page) => async (dispatch) => {
    try {
        await dispatch(apiRequest(page))
        const { data } = await axios.get(`https://api.rawg.io/api/games?key=983d217f0ef244d882e526a4a5550e97&page=${page}`)/*apiConnection.get(`admin/${userId}`);*/
        if (!data.results.length) return dispatch(apiListEnd())
        return dispatch(getGames(data.results, page));
    } catch (error) {
        console.log(error);
        return dispatch(apiFailure())
    }
};

export const resetGamesAction = () => async (dispatch) => {
    try {
      return dispatch(resetGames())
    } catch (error) {
        console.log(error);
    }
};

