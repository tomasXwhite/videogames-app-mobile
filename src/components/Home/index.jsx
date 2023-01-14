import React from "react";
import { View, Text } from "react-native";
import Details from "../Details/Index";


const Home = ({ navigation , route}) => {
    
    return (
        <View>
            <Text>
                {route.params.test}
            </Text>
        </View>
    )
}

export default Home