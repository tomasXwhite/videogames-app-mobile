import 'react-native-gesture-handler';
import React from "react";
import { View, Text, Button } from "react-native";
import Details from "../Details/Index";

import { createDrawerNavigator } from '@react-navigation/drawer';

{/* <View>
    <Text>
        {route.params.test}
    </Text>
</View> */}

function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
      </View>
    );
  }
  
  function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications Screen</Text>
      </View>
    );
  }
  
  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
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
  export default function MyDrawerComponent(){
    return <MyDrawer/>             
  }
  