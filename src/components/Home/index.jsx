import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import { SearchBar } from 'react-native-elements';
import Details from "../Details/Index";
import { getGamesAction } from "../../redux/actions/videogames";
import { useSelector } from "react-redux";
import Card from "../Card";
import Sidebar from "../Sidebar";




const Home = ({ navigation, route }) => {

    return <Sidebar/>
    
}

    
export default Home