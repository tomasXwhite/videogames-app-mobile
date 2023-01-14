// import { apiConnection } from "../../utils/axios";
import axios from "axios";
import { getGames } from "../../reducers/videogames/videogamesReducer.slice";


export const getGamesAction = () => async (dispatch) => {
    try {
        const { data } = await axios.get('https://api.rawg.io/api/games?key=983d217f0ef244d882e526a4a5550e97')/*apiConnection.get(`admin/${userId}`);*/
        return dispatch(getGames(data.results));
    } catch (error) {
        console.log(error);

    }
};