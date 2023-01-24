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
    margin: 5,
    alignItems: 'center',
    justifyContent:"space-evenly",
    width: 130,
    height: 50,
    borderRadius: 7,
    backgroundColor: "white", 
  },
  title:{
    fontSize: 12,
    color: "#141514",
    fontWeight: "600",
  },
})

export default RatingGeneral;