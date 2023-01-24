import React from 'react';
import { View, Text, StyleSheet} from "react-native";
import { Rating } from 'react-native-elements';
import { Surface } from 'react-native-paper';

const RatingGeneral = ({ rating }) => {

  return (
    <View>
        <Surface style={[styles.surface, ]} elevation={4}>
        <Text style={styles.title}>General Rating</Text>
        <Rating fractions={1.1} startingValue={rating} type={"heart"} readonly={true} imageSize={20}/>
        </Surface>
    </View>
    
  )
}

const styles = StyleSheet.create({
  surface:{
      marginTop:10,
      alignItems: 'center',
      justifyContent:"space-evenly",
      width: 120,
      height: 55,
      borderRadius: 7,
      backgroundColor: "#EAF4F4",
      
  },
  title:{
    fontSize: 10,
    color: "#141514",
    fontWeight: "600",
  },
})

export default RatingGeneral;