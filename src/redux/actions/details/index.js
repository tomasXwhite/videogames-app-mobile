import axios from "axios";
import { getDetails, getScreenshots } from "../../reducers/details/detailsReducer.slice";


export const getDetailsAction = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`https://api.rawg.io/api/games/${id}?key=983d217f0ef244d882e526a4a5550e97`)
        const platforms = data.platforms.map(e => e = e.platform.name)
        const tags = data.tags.map(e => e = e.name)
        const genres = data.genres.map(e=> e = e.name)
        let pcRequirements;
        let pcObject = data.platforms.find(e => e.platform.id === 4)
        if (pcObject){
            pcRequirements = pcObject.requirements
        }

        return dispatch(getDetails({
            name: data.name,
            imageUrl: data.background_image,
            description: data.description_raw,
            releaseDate: data.released,
            metacritic: data.metacritic,
            rating: data.rating,
            website: data.website,
            platforms,
            genres,
            pcRequirements,
            tags
        }));
    } catch (error) {
        console.log(error);
    }
};

export const getScreenshotsAction = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=983d217f0ef244d882e526a4a5550e97`)
        return dispatch(getScreenshots(data.results.map(e => e = e.image)));
    } catch (error) {
        console.log(error);
    }
};