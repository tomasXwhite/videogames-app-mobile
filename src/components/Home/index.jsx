import React from "react";
import { View, Text } from "react-native";
import Carrusel from "../Details/Carrusel";


const Home = ({ navigation , route}) => {
    
    return (
        <View>
            <Text>
                {route.params.test}
            </Text>
            <Carrusel/>
        </View>
    )
}

export default Home