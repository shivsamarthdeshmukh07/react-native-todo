import React, { useState } from "react";
import { Button, SafeAreaView, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/rtk/todoSlice";

export default UpdateTodo = ({route,navigation})=>{
     const dispatch = useDispatch();
     const [data , setData]=useState(route.params)
     console.log(data);
     return(
        <SafeAreaView>
             {/* <TextInput
             style={{borderWidth:1}}
             onChangeText={(text)=>setData({...data,todoTitle:text})}
             ></TextInput> */}
             <Button title="update" onPress={()=>dispatch(deleteTodo(route.params))}></Button>
        </SafeAreaView>
     )
}