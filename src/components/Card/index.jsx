
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

//Card recibe Title, Image url y Description por props
const Card = ({title, imageUrl, description}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title ? title : "ALVVVVVVVVVV"}</Text>
      <Image
        style={styles.cardImage}
        source={{ uri: imageUrl ? imageUrl : 'https://www.prsformusic.com/-/media/images/mmagazine/images/2016/07/videogamejoystick.jpg'}}
        resizeMode='cover'
      />
      <Text style={styles.cardText}>{description ? description : "jueguito o lo que sea"}</Text>
    </View>
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
