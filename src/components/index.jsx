import React from "react";

import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Card from "./Card";
import Home from "./Home";


const Main = ({ navigation }) => {
    
    const { favorites } = useSelector((state) => state.favorites)

    const checkIsFav = (title) => {
        if(favorites){
            if(favorites.filter(e => e.title === title).length){
                return true
            }
        }
        return false
    }

    const goHome = () => {
        navigation.navigate("Bar", {test: "Texto del test"})
    }


    return (
        <View>
            <Text>HOLAAAAAAAAAAAAAAAAAA</Text>
            <Button title="Test del router" onPress={goHome}/>
            <Card title={"Doom"} description={"Doomscription"} id={2454} isFavorite={checkIsFav("Doom")} navigation={navigation}/>
        </View>
    )
}

export default Main