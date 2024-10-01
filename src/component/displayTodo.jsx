import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-swipeable';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/rtk/todoSlice';
import { useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { abc } from '../../App';


 
const leftContent = <Text style={{fontSize:14,color:"white",alignSelf:"flex-end",paddingTop:22}}>Delete</Text>;
 
const rightContent = <Text style={{fontSize:14,color:"white",paddingTop:22}}>Edit</Text>;
 
export default DisplayTodo=({data})=>{

const {currentTheme}=useContext(abc)


// for warning useNativeDriver required
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
}, [])


// const dispatch=useDispatch()
   const navigation = useNavigation();

  //  const openModal=(value)=>{
  //   setModal(!modal)
        
  
  //  }

  return (
    <View >

    <Swipeable leftContent={leftContent} rightContent={rightContent}
    leftContainerStyle={{width:"100%",borderRadius:5,backgroundColor:"red"}}
    rightContainerStyle={{backgroundColor:"green"}}
    leftActionActivationDistance={175}
    onLeftActionRelease={()=>navigation.navigate("modal",data)}
    rightActionActivationDistance={175}
    onRightActionRelease={()=>navigation.navigate("create",data) }
    >
    <View style={{borderRadius:10,borderColor:currentTheme.containerBackgoundColor,borderWidth:1,height:70,justifyContent:'center',alignItems:"center",flexDirection:"row",backgroundColor:currentTheme.containerBackgoundColor}}>
      {data.purpose=="fitness"? 
        <Image style={{height:50,width:50}} source={require('../assets/images/icons8-gym-100.png')}/>
         :data.purpose=="work"?
        <Image style={{height:50,width:50}} source={require('../assets/images/icons8-work-100.png')}/>
         :data.purpose=="family"?
        <Image style={{height:50,width:50}} source={require('../assets/images/icons8-family-100.png')}/>
         :data.purpose=="personal"?
        <Image style={{height:50,width:50}} source={require('../assets/images/icons8-man-with.png')}/>
         :
        <Image style={{height:50,width:50}} source={require('../assets/images/icons8-task-100.png')}/>

    }
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",marginHorizontal:15,backgroundColor:currentTheme.containerBackgoundColor}}>
                <View>
                <Text style={{fontSize:24,color:currentTheme.textColor}}>{data.title}</Text>
                <Text style={{color:"gray"}}>{data.startTime}-{data.endTime}</Text>


                </View>
                <View style={{height:30,justifyContent:"center",width:70,borderRadius:5}}>
                <Text style={{alignSelf:"center",color:data.priority=="high"?"red":data.priority=="low"?"orange":"green"}}>{data.priority}</Text>
                </View>
                
        </View>
    </View>
    </Swipeable>


</View>
  );
}

