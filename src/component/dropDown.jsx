import React, { memo, useState } from "react";
import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";




export default DropDownComp=({getDataFromChild,value})=>{
    const [isOpen,setIsOpen]=useState(false)
    const [currentVal,setCurrentVal]=useState("")
    
    
    const data1 =[{label:"Fitness",value:"fitness"},
        {label:"Work",value:"work"},
        {label:"Family",value:"family"},
        {label:"Personal",value:"personal"},
        {label:"Other",value:"other"},



    ]
   console.log("drop")
   
    return(
    <View style={{zIndex:1}}>
       
     
       

        {/* <View style={{flexDirection:'row'}}> */}
        
        <DropDownPicker 
       // listItemContainerStyle={{backgroundColor:'black'}}
        selectedItemContainerStyle={{backgroundColor:"gray"}}
        // textStyle={{color:"white"}}
        //labelStyle={{color:"white",backgroundColor:"black"}}
       textStyle={{fontSize:15}}
        containerStyle={{
          marginLeft:0,
          width:"100%",
          borderBottomWidth:1,
          paddingBottom:0,
        }}
        //labelStyle={{backgroundColor:"black"}}
        dropDownStyle={{backgroundColor: 'black'}}
        style ={{borderWidth:0}}
        items={data1}
        setOpen={()=>setIsOpen(!isOpen)}
        open={isOpen}
        value={value}
        setValue={value =>{ getDataFromChild(value),setCurrentVal(value)}}
        disableBorderRadius={false}
        
       // onPress={()=>(getDataFromChild(""))}
      //  dropDownDirection="TOP"
       placeholder=""
       placeholderStyle={{color:"#969696"}}
        />
        {/* </View> */}
     
        </View>
    )
}