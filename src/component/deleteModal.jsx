import React, { useState } from "react";
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/rtk/todoSlice";


export default DeleteModal=({navigation,route})=>{

  const [modal, setModal] = useState(true);
   const dispatch = useDispatch();
    const data = route.params


    return(
        <Modal
        animationType="fade"
        visible={modal}
        transparent={true}
        >
        <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"gray"}} >
           <View style={{backgroundColor:"white",height:120,width:300,borderRadius:10}}>
              <View style={{alignItems:"center",marginVertical:15,marginHorizontal:15}}>
                     <Text style={{fontSize:20}}>Delete Todo ?</Text>
                     <Text style={{fontSize:14,textAlign:"center"}}>This Todo will be permanently deleted from this list</Text>
        
              </View>
              <View style={{flex:1,flexDirection:"row",borderTopWidth:1,alignItems:"center"}} >
              <TouchableOpacity style={{width:150,alignItems:"center",}}
              onPress={()=>{navigation.navigate("show")}}
              >
                <Text style={{color:"#1A73E9"}}>Cancel</Text>
              </TouchableOpacity>
              <View style={{borderWidth:0.5,height:33}}></View>
              <TouchableOpacity style={{width:150,alignItems:"center",}}
               onPress={()=>{
                dispatch(deleteTodo(data.id))
                navigation.navigate("show")
               }}
               >
                <Text style={{color:"#1A73E9"}}>Delete</Text>
              </TouchableOpacity>
              </View>
        
           </View>
        </SafeAreaView>
        
        </Modal>
    )
}