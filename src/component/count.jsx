import React, { useEffect, useState } from "react";
import { Button, Platform, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "../redux/Counter/counterAction";

export default Count =()=>{
      const dispatch = useDispatch();
      const showCount = useSelector((state)=>state.counter)
      const [number , setNumber] = useState();
     
      useEffect(()=>{
        console.log('fghjkjhg')
        // setNumber(showCount)
      },[showCount])

    return(
        <SafeAreaView>
             <Text>{showCount}</Text>
             <View style={{backgroundColor:Platform.OS=== "ios" ? "blue":false, }}>
             <Button title="increase" onPress={()=>dispatch(increaseCount(1))}></Button>
             </View>
             <Button title="decrease" onPress={()=>dispatch(decreaseCount())}></Button>

        </SafeAreaView>
    )
}