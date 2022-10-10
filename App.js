import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import DetailScreen from "./Screens/DetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: "SpaceX Launch List" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Detail"
          options={{ title: "SpaceX Launch Detail" }}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  launchBox: {
    backgroundColor: "#880808",
    flex: 1,
    padding: 10,
    marginHorizontal: 30,
    color: "#fff",
  },
});
