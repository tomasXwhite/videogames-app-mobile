import 'react-native-gesture-handler';
import React from "react";
import { View, Text, Button } from "react-native";
import Details from "../Details/Index";
import BaseHome from '../Home/BaseHome';

import { createDrawerNavigator } from '@react-navigation/drawer';

function Feed() {

  let num = 8

    return (
        <View >
          <Text>{num > 6 ? "num" : "not num"}</Text>
          <BaseHome/>
        </View>
    );
  }
  
  function Notifications() {

    return (

        <View >
          <BaseHome/>
        </View>
    );
  }
  
  function Profile() {
    return (
        <View >
          <BaseHome/>
        </View>
    );
  }
  
  const Drawer = createDrawerNavigator();
  
  const MyDrawer = () => {
    return (
      <Drawer.Navigator useLegacyImplementation initialRouteName="Feed">
        <Drawer.Screen
          name="Feed"
          component={Feed}
          options={{ drawerLabel: 'Home' }}
        />
        <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{ drawerLabel: 'Updates' }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ drawerLabel: 'Profile' }}
        />
      </Drawer.Navigator>
    );
  }

  
  export default function Sidebar(){
    return <MyDrawer/>             
  }
  