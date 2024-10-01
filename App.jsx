import React, { createContext, useState } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
// import store from "./android/src/redux/store/store";
import CounterScreen from "./src/screens/counterScreen";
import { PersistGate } from "redux-persist/integration/react";
//import store, {  persistor } from "./src/redux/Counter/countStore";
import todoStore,{persistor} from "./src/redux/rtk/todoStore";
import CreateTodo from "./src/screens/showTodos";
import Routes from "./src/routes/routes";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import showTodo from "./src/screens/createTodo";
import updateTodo from "./src/screens/updateTodo";
import { lightTheme } from "./src/assets/constants/theme";

export const abc = createContext();

const App=()=>{
   
  console.warn = () => {}

  const Stack = createNativeStackNavigator()
  const [currentTheme,setCurrentTheme]=useState(lightTheme);
   
  return(
      <Provider store={todoStore} >
         <PersistGate loading={null} persistor={persistor}>
         {/* <PersistGate loading={null} persistor={persistor}></PersistGate> */}
     
      {/* <NavigationContainer>
      <Stack.Navigator initialRouteName="create">
        <Stack.Screen name="create" component={CreateTodo}/>
        <Stack.Screen 
                      name="show" component={showTodo}/>
        <Stack.Screen name="update" component={updateTodo}/>
        
      </Stack.Navigator> */}
        <abc.Provider value={{currentTheme,setCurrentTheme}} >
      
      <Routes/>
     </abc.Provider>
      {/* </NavigationContainer> */}
     
      </PersistGate>
     </Provider>
  )
}

export default App;


