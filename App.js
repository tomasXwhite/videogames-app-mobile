import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./src/components";
import Details from "./src/components/Details/Index";
import Home from "./src/components/Home";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { store } from "./src/redux/store";
import {
  useFonts as kanitFonts,
  Kanit_400Regular,
} from "@expo-google-fonts/kanit";
import {
  useFonts as mulishFonts,
  Mulish_400Regular,
} from "@expo-google-fonts/mulish";

const Stack = createNativeStackNavigator();

export default function App() {
  const [kanitLoaded] = kanitFonts({
    Kanit_400Regular,
  });

  const [mulishLoaded] = mulishFonts({
    Mulish_400Regular,
  });

  if (!kanitLoaded || !mulishLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={Main}
              options={{
                headerTitle: "Main Nashe",
              }}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="Details"
              component={Details}
              options={({ route }) => ({ title: route.params.title })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
