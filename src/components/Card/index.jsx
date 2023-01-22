import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setFavouriteAction } from '../../redux/actions/favorites';

//Card recibe Title, Image url y Description por props
const Card = ({title, imageUrl, description, id, isFavorite, navigation}) => {

  const dispatch = useDispatch()

  const clickHeart = () =>{
    dispatch(setFavouriteAction({title, imageUrl, description, id, isFavorite}))
  }

  const goToDetails = () => {
    navigation.navigate("Details", { id: id })
  }

  return (
    <TouchableOpacity onPress={goToDetails}>
    <View style={styles.cardContainer}>
      <MaterialCommunityIcons name="heart" color={isFavorite? "red" : "black"} size={26} onPress={clickHeart} style={{zIndex:2}}/>
      <Text style={styles.cardTitle}>{title ? title : "ALVVVVVVVVVV"}</Text>
      <Image
        style={styles.cardImage}
        source={{ uri: imageUrl ? imageUrl : 'https://www.prsformusic.com/-/media/images/mmagazine/images/2016/07/videogamejoystick.jpg'}}
        resizeMode='cover'
      />
      <Text style={styles.cardText}>{description ? description : "jueguito o lo que sea"}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    width: 160,
    height: 230,
    backgroundColor: 'skyblue',
  },
  cardTitle: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  cardText: {
    fontSize: 12,
    margin: 5,
    alignSelf: 'center',
  },
  cardImage: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default Card;
