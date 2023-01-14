import { useEffect, useState } from "react"
import { View, Text, ActivityIndicator } from "react-native"
import Carrusel from "./Carrusel"
import axios from "axios"

const Details = ({ navigation , route }) => {

    const [screenshotsArray, setScreenshotsArray] = useState([])
    const [loadingScreenshots, setLoadingScreenshots] = useState([false])

    useEffect(()=> {
        if(!screenshotsArray.length){
            fetchImages(route.params.id)
        }
    }, [])

    const fetchImages = async (id) => {
        setLoadingScreenshots(true)
        const response = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=983d217f0ef244d882e526a4a5550e97`)
        const data = response.data
        setScreenshotsArray(data.results.map(e => e = e.image))
        setLoadingScreenshots(false)
    }

    
    return (
        <View>
            {loadingScreenshots? <ActivityIndicator/> : screenshotsArray.length? <Carrusel content={screenshotsArray}/> : <Text> No hay fotos </Text>}
        </View>
    )
}

export default Details