import React from "react";
import { View, Text } from "react-native";


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