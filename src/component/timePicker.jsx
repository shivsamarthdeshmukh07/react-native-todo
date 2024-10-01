import React, {useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";



export default TimePicker =({getDataFromChild,start,end})=>{
    const [isVisible,setIsVisible]=useState(false);
    const [showTime,setShowTime]=useState("");


   
    console.log("datePicker") 
    const confirmDate=(date)=>{
       
        
        const tempDate=new Date(date)
         const time = tempDate.toLocaleTimeString().split(' ')
             timeTemp = time[0].split(":")
        
             
       
       
        const timeStringFormat = `${timeTemp[0]}:${timeTemp[1]} ${time[1]}`
        
        
        setShowTime(timeStringFormat)

        getDataFromChild(timeStringFormat)
     }
    return(
              
        <View style={{height:50,width:"40%",borderBottomWidth:1}}>
            <TouchableOpacity onPress={()=>setIsVisible(!isVisible)}
                style={{flex:1,justifyContent:"center"}}>
                    <Text >{start?start:end?end:showTime}</Text>
                    </TouchableOpacity>
            <DateTimePicker
            mode="time"
            
            isVisible={isVisible}
            onConfirm={(date)=>{confirmDate(date)
                setIsVisible(!isVisible)
            }}
            onCancel={()=>setIsVisible(!isVisible)}
            
            //To use the new iOS 14 style of datetime picker, set the display prop to inline:
           // display="inline"
            
            
            />
            </View>
           
        
    )
}