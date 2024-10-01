import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { NavigationContainer } from "@react-navigation/native";
// import createTodo from "../screens/createTodo";

import { NavigationContainer } from "@react-navigation/native";

import updateTodo from "../screens/updateTodo";
import showTodos from "../screens/showTodos";
import createTodo from "../screens/createTodo";
import SwipeGesture from "../component/displayTodo";
import displayTodo from "../component/displayTodo";
import deleteModal from "../component/deleteModal";
import otpVerification from "../screens/otpVerification";
import { Screen } from "react-native-screens";
import dataFetching from "../screens/dataFetching";




export default Routes=()=>{
    const Stack = createNativeStackNavigator()
    return(
      
        <NavigationContainer>
      <Stack.Navigator initialRouteName="fetching" >

        <Stack.Screen options={{headerShown:false}} name="show" component={showTodos}/>
        <Stack.Screen options={{headerShown:false}} name="create" component={createTodo}/> 
        <Stack.Screen name="update" component={updateTodo}/>
        <Stack.Screen options={{headerShown:false}} name="modal" component={deleteModal}/>
        <Stack.Screen options={{headerShown:false}} name="otp" component={otpVerification}/>
        <Stack.Screen name="fetching" component={dataFetching}/>
        
      </Stack.Navigator> 
     
      
       </NavigationContainer> 
    )
}