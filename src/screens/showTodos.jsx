import React, { useContext, useState } from "react";
import { Appearance, Button, FlatList, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import LightIcon from 'react-native-vector-icons/MaterialIcons'
import DisplayTodo from "../component/displayTodo";
import { darkTheme, lightTheme } from "../assets/constants/theme";
import { abc } from "../../App";


export default ShowTodos=({navigation})=>{
 const {currentTheme,setCurrentTheme} = useContext(abc)
         
    console.log("a",currentTheme)
  //const [currentTheme, setCurrentTheme] = useState(lightTheme);
  
const lightMode = <LightIcon name={currentTheme==lightTheme?"light-mode":"dark-mode"} size={25} color={currentTheme==lightTheme?"black":"white"}/>

      
  // useEffect(() =>{
  //   if (colorScheme === 'dark') {
  //     setCurrentTheme(darkTheme)
  //   } else{
  //     setCurrentTheme(lightTheme)
  //   }
  // },[])
  //  console.log("heyyyyyyyyyyyyyyy",currentTheme)
   const data = useSelector(state =>state.todo.arr)
  
  //  console.log("byeeeee",data)

   const todaysDate=new Date()
        const dayNumber = todaysDate.getDay();
        const dateSplit= todaysDate.toDateString().split(' ')
       
        const dateStringFormat = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[3]}`
   
   // console.log(navigation)
     let day;
    switch (dayNumber) {
    case 1:   day = "Monday"
    break;
    case 2:  day = "Tuesday"
    break;
    case 3: day = "Wednesday"
    break;
    case 4:  day = "Thursday"
    break;
    case 5:  day = "Friday"
    break;
    case 6: day = "Saturday"
    break;
    case 7: day = "Sunday" 
    break;
   }
  //   Appearance.setColorScheme('light')
  //  const colorScheme = Appearance.getColorScheme();
    return(
     
      <View style={{flex:1,backgroundColor:currentTheme.containerBackgoundColor}}>
       <SafeAreaView  style={{margin:12,flex:1,backgroundColor:currentTheme.containerBackgoundColor}}>
        <StatusBar
         barStyle={currentTheme==lightTheme?"":"light-content"}
        />
       <View style={{position:"absolute",bottom:'5%',right:"10%",zIndex:1}}>
             <TouchableOpacity onPress={() => navigation.navigate('create')}>
               <View style={{height:50,width:50,backgroundColor:"#1A73E9",borderRadius:50,}}>
                  <Text style={{color:"white",fontSize:35,alignSelf:"center"}}>+</Text>
               </View>
             </TouchableOpacity>
       </View>
       <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between"}}> 
       <Text style={{color:currentTheme.textColor}} >Hello friend</Text>
       
         
         <TouchableOpacity
         onPress={()=>currentTheme==lightTheme?setCurrentTheme(darkTheme):setCurrentTheme(lightTheme)}
         >
         {lightMode}
         </TouchableOpacity>
       </View>
       <Text style={{marginTop:20,fontSize:32,color:currentTheme.textColor}}>Ready to do your</Text>
       <Text style={{marginTop:5,fontSize:32,fontFamily:"bold",color:currentTheme.textColor}}>Daily Tasks ?</Text>
        <View style={{flexDirection:"row",marginTop:10}}>
        <Text style={{color:currentTheme.textColor}}>Today's</Text>
        <Text style={{color:"#1A73E9",fontWeight:"bold"}}> {day}</Text>

        </View>
        <Text style={{color:"gray",fontSize:12}}>{dateStringFormat}</Text>
           <View style={{flexDirection:"row"}}>
            <View style={{borderWidth:3,marginLeft:75,marginTop:20,borderRadius:5,borderColor:currentTheme.textColor}}></View>
          <View style={{marginTop:22,borderWidth:1,width:"100%",height:0,borderColor:currentTheme.textColor}}></View>
          </View>
        
       <Text style={{marginTop:5,fontSize:25,fontFamily:"bold",marginBottom:20,color:currentTheme.textColor}}>
         Ongoing
       </Text>

       <FlatList
         data={data}
         renderItem={({item})=><DisplayTodo data={item}
                  // id={item.id}
            //   purpose={item.purpose}
              // priority={item.priority}
              // start={item.startTime}
              // end={item.endTime}
              // purpose={item.purpose}
              
            //   description={item.description}
            
         />}
         ItemSeparatorComponent={<View style={{height:15}}></View>}
       ></FlatList>
        
       </SafeAreaView>
       </View>

    )
}