import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import CustomDrawer from "./navigation/CustomDrawer";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
