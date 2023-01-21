import { setFavorites } from "../../reducers/favorites/favoritesReducer.slice";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const setFavouriteAction = ({title, imageUrl, description, id, isFavorite}) => async (dispatch) => {
    try{
        const jsonValue = await AsyncStorage.getItem('favoriteList')
        const parsedData = jsonValue != null ? JSON.parse(jsonValue) : null;
        if(!isFavorite){
            if(parsedData){
                const saveValue = JSON.stringify([...parsedData, {title, imageUrl, description, id}])
                await AsyncStorage.setItem('favoriteList', saveValue)
                dispatch(setFavorites([...parsedData, {title, imageUrl, description, id}]))
            }else{
                const saveValue = JSON.stringify([{title, imageUrl, description, id}])
                await AsyncStorage.setItem('favoriteList', saveValue)
                dispatch(setFavorites([{title, imageUrl, description, id}]))
            }
        }else{
            if(parsedData && parsedData.length > 1){
                const saveValue = JSON.stringify(parsedData.filter(e => e.title !== title))
                await AsyncStorage.setItem('favoriteList', saveValue)
                dispatch(setFavorites(parsedData.filter(e => e.title !== title)))
            }else{
                await AsyncStorage.removeItem('favoriteList')
                dispatch(setFavorites(null))
            }
        }
    }catch(e){
        console.log(e);
    }
}

export const getFavourites = () => async (dispatch) => {
    try{
        const jsonValue = await AsyncStorage.getItem('favoriteList')
        const parsedData = jsonValue != null ? JSON.parse(jsonValue) : null;
        dispatch(setFavorites(parsedData))
    } catch(e) {
        console.log(e)
    }
}