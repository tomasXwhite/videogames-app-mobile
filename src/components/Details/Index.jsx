import { useEffect, useState } from "react"
import { View, Text, ActivityIndicator, Image, StyleSheet, ScrollView} from "react-native"
import ViewMoreText from 'react-native-view-more-text';
import Carrusel from "./Carrusel"
import axios from "axios"
import TagPills from "./TagPills";
import { A } from "@expo/html-elements";
import ReqText from "./ReqText";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsAction, getScreenshotsAction } from "../../redux/actions/details";
import { clearDetails } from "../../redux/reducers/details/detailsReducer.slice";


const Details = ({ navigation , route }) => {

    const [loadingScreenshots, setLoadingScreenshots] = useState(false)
    const [loadingInfo, setLoadingInfo] = useState(false)

    const { details, screenshots } = useSelector((state) => state.details)
    const dispatch = useDispatch()

    useEffect(()=> {
        if(!screenshots.length){
            fetchImages(route.params.id)
        }
        if(!details){
            fetchInfo(route.params.id)
        }
        return(() => {
            dispatch(clearDetails())
        })
    }, [])

    const fetchImages = async (id) => {
        setLoadingScreenshots(true)
        await dispatch(getDetailsAction(id))
        setLoadingScreenshots(false)
    }

    const fetchInfo = async (id) => {
        setLoadingInfo(true)
        await dispatch(getScreenshotsAction(id))
        setLoadingInfo(false)
    }



    
    return (
        loadingInfo? <ActivityIndicator/> :
        <ScrollView>
            {details? 
            <View style={styles.infoContainer}>
                <Image source={{uri: details.imageUrl}} style={{width: 350, height: 350, margin: 10 }}/> 
                <Text>{details.name}</Text>
                <Text style={styles.title}>DESCRIPTION</Text>
                <ViewMoreText
                    numberOfLines={4}
                    renderViewMore={(onPress) => <Text onPress={onPress} style={{color:"blue"}}>View more</Text>}
                    renderViewLess={(onPress) => <Text onPress={onPress} style={{color:"blue"}}>View less</Text>}
                >
                    <Text>
                        {details.description}
                    </Text>
                </ViewMoreText>
                {loadingScreenshots? <ActivityIndicator/> : screenshots.length? <Carrusel content={screenshots}/> : <Text> No hay fotos </Text>}
                <Text style={styles.title}>INFO</Text>
                <View style={styles.row}>
                        <View style={styles.leftColumn}>
                            <Text style={styles.subtitle}>Metacritic</Text>
                            <Text>{details.metacritic}/100</Text>
                        </View>
                        <View style={styles.rightColumn}>
                            <Text style={styles.subtitle}>Platforms</Text>
                            <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                                {details.platforms.map(e => <TagPills tag={e}/>)}
                            </View>
                        </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.leftColumn}>
                        <Text style={styles.subtitle}>General Rating</Text>
                        <Text>{details.rating}/5</Text>
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subtitle}>Genres</Text>
                        <View style={{display:"flex", flexDirection:"row"}}>
                            {details.genres.map(e => <TagPills tag={e}/>)}
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.leftColumn}>
                        <Text style={styles.subtitle}>Release Date</Text>
                        <Text>{details.releaseDate}</Text>
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subtitle}>Website</Text>
                        <A href={details.website} style={{fontSize:12, textDecorationLine: 'underline'}}>{details.website}</A>
                    </View>
                </View>
                <Text style={styles.title}>PC REQUIREMENTS</Text>
                <View>
                {details.pcRequirements?
                    <>
                    <View style={styles.row}>
                        <ReqText requirements={details.pcRequirements.minimum} title={styles.subtitle} reqStyle={{fontSize: 14}} viewStyle={{}}/>
                    </View>
                    <View style={styles.row}>
                    <ReqText requirements={details.pcRequirements.recommended} title={styles.subtitle} reqStyle={{fontSize: 14}} viewStyle={{marginTop:8}}/>
                    </View>
                    </>
                :
                    <>
                    </>
                }
                </View>
                <Text style={styles.title}>Tags</Text>
                <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap", alignContent:"center", justifyContent:"flex-start"}}>
                    {details.tags.map(e => <TagPills tag={e}/>)}
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