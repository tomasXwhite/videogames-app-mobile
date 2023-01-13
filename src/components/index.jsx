import React from "react";

import { Button, Text, View } from "react-native";
import Home from "./Home";


const Main = ({ navigation }) => {

    const goHome = () => {
        navigation.navigate("Home", {test: "Texto del test"})
    }

    return (
        <View>
            <Text>HOLAAAAAAAAAAAAAAAAAA</Text>
            <Button title="Test del router" onPress={goHome}/>
        </View>
    )
}

export default Main