import { useEffect, useState } from "react"
import { View, Text, ActivityIndicator, Image, StyleSheet, ScrollView} from "react-native"
import ViewMoreText from 'react-native-view-more-text';
import Carrusel from "./Carrusel"
import axios from "axios"
import TagPills from "./TagPills";
import { A } from "@expo/html-elements";
import ReqText from "./ReqText";

const Details = ({ navigation , route }) => {

    const [screenshotsArray, setScreenshotsArray] = useState([])
    const [loadingScreenshots, setLoadingScreenshots] = useState(false)
   
    const [info, setInfo] = useState(null)
    const [loadingInfo, setLoadingInfo] = useState(false)

    useEffect(()=> {
        if(!screenshotsArray.length){
            fetchImages(route.params.id)
        }
        if(!info){
            fetchInfo(route.params.id)
        }
    }, [])

    const fetchImages = async (id) => {
        setLoadingScreenshots(true)
        const response = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=983d217f0ef244d882e526a4a5550e97`)
        const data = response.data
        setScreenshotsArray(data.results.map(e => e = e.image))
        setLoadingScreenshots(false)
    }

    const fetchInfo = async (id) => {
        setLoadingInfo(true)
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=983d217f0ef244d882e526a4a5550e97`)
        const data = response.data
        const platforms = data.platforms.map(e => e = e.platform.name)
        const tags = data.tags.map(e => e = e.name)
        const genres = data.genres.map(e=> e = e.name)
        let pcRequirements;
        let pcObject = data.platforms.find(e => e.platform.id === 4)
        if (pcObject){
            pcRequirements = pcObject.requirements
        }

        setInfo({
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
        })
        setLoadingInfo(false)
    }



    
    return (
        loadingInfo? <ActivityIndicator/> :
        <ScrollView>
            {info? 
            <View style={styles.infoContainer}>
                <Image source={{uri: info.imageUrl}} style={{width: 350, height: 350, margin: 10 }}/> 
                <Text>{info.name}</Text>
                <Text style={styles.title}>DESCRIPTION</Text>
                <ViewMoreText
                    numberOfLines={4}
                    renderViewMore={(onPress) => <Text onPress={onPress} style={{color:"blue"}}>View more</Text>}
                    renderViewLess={(onPress) => <Text onPress={onPress} style={{color:"blue"}}>View less</Text>}
                >
                    <Text>
                        {info.description}
                    </Text>
                </ViewMoreText>
                {loadingScreenshots? <ActivityIndicator/> : screenshotsArray.length? <Carrusel content={screenshotsArray}/> : <Text> No hay fotos </Text>}
                <Text style={styles.title}>INFO</Text>
                <View style={styles.row}>
                        <View style={styles.leftColumn}>
                            <Text style={styles.subtitle}>Metacritic</Text>
                            <Text>{info.metacritic}/100</Text>
                        </View>
                        <View style={styles.rightColumn}>
                            <Text style={styles.subtitle}>Platforms</Text>
                            <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                                {info.platforms.map(e => <TagPills tag={e}/>)}
                            </View>
                        </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.leftColumn}>
                        <Text style={styles.subtitle}>General Rating</Text>
                        <Text>{info.rating}/5</Text>
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subtitle}>Genres</Text>
                        <View style={{display:"flex", flexDirection:"row"}}>
                            {info.genres.map(e => <TagPills tag={e}/>)}
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.leftColumn}>
                        <Text style={styles.subtitle}>Release Date</Text>
                        <Text>{info.releaseDate}</Text>
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subtitle}>Website</Text>
                        <A href={info.website} style={{fontSize:12, textDecorationLine: 'underline'}}>{info.website}</A>
                    </View>
                </View>
                <Text style={styles.title}>PC REQUIREMENTS</Text>
                <View>
                {info.pcRequirements?
                    <>
                    <View style={styles.row}>
                        <ReqText requirements={info.pcRequirements.minimum} title={styles.subtitle} reqStyle={{fontSize: 14}} viewStyle={{}}/>
                    </View>
                    <View style={styles.row}>
                    <ReqText requirements={info.pcRequirements.recommended} title={styles.subtitle} reqStyle={{fontSize: 14}} viewStyle={{marginTop:8}}/>
                    </View>
                    </>
                :
                    <>
                    </>
                }
                </View>
                <Text style={styles.title}>Tags</Text>
                <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap", alignContent:"center", justifyContent:"flex-start"}}>
                    {info.tags.map(e => <TagPills tag={e}/>)}
                </View>
            </View>
            : null}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        width:350
    },
    columnContainer: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:350
    },
    leftColumn: {
        width:175
    },
    rightColumn:{
        width:175
    },
    row: {
        width: 350,
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    screenContainer: {
        display:"flex",
        alignContent:"center",
        justifyContent:"center",
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "600"
    },
    title:{
        fontSize: 18,
        fontWeight: "900",
        alignSelf:"flex-start",
        marginLeft:16,
        marginTop:8
    },
  });


export default Details