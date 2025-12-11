import React, { Component } from "react";
import { View } from "react-native";
import LoginScreen from "./src/screen/LoginScreen/LoginScreen";
import HomeScreen from "./src/screen/HomeScreen/HomeScreen";
import RegisterScreen from "./src/screen/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginOTP from "./src/screen/LoginScreen/LoginOTP";
import HomeDetail from "./src/screen/HomeDetail";






const Stack= createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="LoginOtp" component={LoginOTP}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Bottom" component={BottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>
    )   
}


const Bottom=createBottomTabNavigator()
function BottomTab(){
  return(
    <Bottom.Navigator screenOptions={{headerShown:false}}>
      <Bottom.Screen name="Home" component={HomeScreen}/>
      <Bottom.Screen name="Detail" component={HomeDetail}/>
    </Bottom.Navigator>
  )
}