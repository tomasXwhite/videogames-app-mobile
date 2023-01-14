import React from "react";
import { View, Text } from "react-native";
import Carrusel from "../Details/Carrusel";
import Details from "../Details/Index";


const Home = ({ navigation , route}) => {
    
    return (
        <View>
            <Text>
                {route.params.test}
            </Text>
            <Details/>
        </View>
    )
}

export default Home