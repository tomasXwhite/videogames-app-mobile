import React from "react";

import { Text, View } from "react-native";
import { Route, Switch, NativeRouter, TouchableWithoutFeedback } from "react-router-native"
import Home from "./Home";


const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Alert.alert("Hola pa")}>
                <Text>Videogames!</Text>
            </TouchableWithoutFeedback>
            <NativeRouter>
                <Route path="/" exact>
                    <Home />

                </Route>

            </NativeRouter>
        </View>
    )
}

export default Main