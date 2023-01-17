import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/components';
import Details from './src/components/Details/Index';
import Home from './src/components/Home';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Main'
            component={Main}
            options={{
              headerTitle: "Main Nashe"
            }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
          />
          <Stack.Screen
            name='Details'
            component={Details}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
