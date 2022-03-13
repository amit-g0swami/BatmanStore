import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import ItemDetail from "./screens/ItemDetail";
import UserProfile from "./screens/UserProfile";
import ContactUs from "./screens/ContactUs";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();
const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
};

export const SignedInStack = () => (
    <ReduxProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={screenOptions}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="ItemDetail" component={ItemDetail} />
                <Stack.Screen name="UserProfile" component={UserProfile} />
                <Stack.Screen name="ContactUs" component={ContactUs} />
            </Stack.Navigator>
        </NavigationContainer>
    </ReduxProvider>
);

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={screenOptions}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);