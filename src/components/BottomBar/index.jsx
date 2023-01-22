import View from '@expo/html-elements/build/primitives/View';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { getFavourites } from '../../redux/actions/favorites';
import FavoriteScreen from '../FavoriteScreen';
import Home from '../Home';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavourites())
  },[])


  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: '#7F8584' }}
    >
      <Tab.Screen
        name="Notifications"
        component={Home}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="axe-battle" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favs"
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}