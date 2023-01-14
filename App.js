import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/components';
import Details from './src/components/Details/Index';
import Home from './src/components/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={Main}
          options={{
            headerTitle:"Main Nashe"
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Details'
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
