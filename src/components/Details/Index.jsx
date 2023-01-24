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
import { Title } from 'react-native-paper';
import { s } from "react-native-wind";
import Metacritic from "./Metacritic";

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
          <View style={[stylesWind.container, styles.infoContainer]}>
              <Image source={{uri: details.imageUrl}} style={stylesWind.image}/>
              <Title style={styles.name}>{details.name}</Title>
              <View>
                  <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                    {details.platforms.map(e => <TagPills tag={e}/>)}
                  </View>
              </View>
              <View style={styles.row}>
                      <View style={styles.leftColumn}>
                      <Metacritic metacritic={details.metacritic}></Metacritic>
                      </View>
              </View>
              <View style={styles.row}>
                  <View style={styles.leftColumn}>
                      <Text style={styles.subtitle}>General Rating</Text>
                      <Text style={styles.subtitle}>{details.rating}/5</Text>
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
                      <Text style={styles.subtitle}>{details.releaseDate}</Text>
                  </View>
                  <View style={styles.rightColumn}>
                      <Text style={styles.subtitle}>Website</Text>
                      <A href={details.website} style={{fontSize:12, textDecorationLine: 'underline', color: "#EAF4F4"}}>{details.website}</A>
                  </View>
              </View>
              {loadingScreenshots? <ActivityIndicator/> : screenshots.length? <Carrusel content={screenshots}/> : <Text> No hay fotos </Text>}
              <Title style={styles.title}>Description</Title>
              <ViewMoreText
                  numberOfLines={4}
                  renderViewMore={(onPress) => <Text onPress={onPress} style={{color:"blue"}}>View more</Text>}
                  renderViewLess={(onPress) => <Text onPress={onPress} style={{color:"blue"}}>View less</Text>}
              >
                  <Text style={styles.text}>
                      {details.description}
                  </Text>
              </ViewMoreText>
              <Text style={styles.title}>PC REQUIREMENTS</Text>
              <View>
              {details.pcRequirements?
                    <>
                    <View style={styles.row}>
                        <ReqText requirements={details.pcRequirements.minimum? details.pcRequirements.minimum : "Minimum:\nNot Info Yet"} title={styles.subtitle} reqStyle={{fontSize: 14}} viewStyle={{}} min={true}/>
                    </View>
                    <View style={styles.row}>
                    <ReqText requirements={details.pcRequirements.recommended ? details.pcRequirements.recommended : "Recommended:\nNot Info Yet"} title={styles.subtitle} reqStyle={{fontSize: 14}} viewStyle={{marginTop:8}}/>
                    </View>
                    </>
                :
                    null
                }
              </View>
              <Text style={styles.title}>Tags</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{display:"flex", flexDirection:"row", flexWrap:"wrap", alignContent:"center", justifyContent:"flex-start"}}>
                    {details.tags.map(e => <TagPills tag={e}/>)}
                </ScrollView>
          </View>
          : null}
      </ScrollView>
  )
}

const stylesWind = {
    container:s`flex flex-col items-center justify-center t.fontSerif`,
    image: s`w-full h-56 rounded-bl-2xl rounded-br-2xl`,
};

const styles = StyleSheet.create({
  infoContainer: {
      backgroundColor: "#141514"
  },
  name:{ 
    margin: 5,
    color: "#EAF4F4",
    },
  columnContainer: {
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      width:350,
      
  },
  leftColumn: {
      width:175,
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
      fontWeight: "600",
      color: "#EAF4F4",
  },
  title:{
      fontSize: 20,
      fontWeight: "900",
      alignSelf:"flex-start",
      marginLeft:16,
      marginTop:8,
      color: "#EAF4F4",
  },
  text:{
    fontSize: 14,
    fontWeight: "normal",
    alignSelf:"flex-start",
    marginLeft:16,
    marginTop:8,
    color: "#cdd9f1",
},
});

export default Details;