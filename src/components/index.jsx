import React from "react";

import { Button, Text, View } from "react-native";
import Card from "./Card";
import Home from "./Home";


const Main = ({ navigation }) => {

    const goHome = () => {
        navigation.navigate("Home", {test: "Texto del test"})
    }

    const goToDetails = (id, title) => {
        navigation.navigate("Details", {title: title, id})
    }

    return (
        <View>
            <Text>HOLAAAAAAAAAAAAAAAAAA</Text>
            <Button title="Test del router" onPress={goHome}/>
            <Card title={"Doom"} description={"Doomscription"} id={2454} onPress={goToDetails}/>
        </View>
    )
}

export default Main