import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const myIcon = <BackIcon name="backspace-outline" size={20}  />;
//const back = <Icon name="backspace-outline" size={25} />
export default OtpVerification=()=>{
    // const arr=[1,0,0,0]
    const [otp, setOtp]=useState([])
    
    console.log("heyyyy",otp);
    return(
        <SafeAreaView style={{marginHorizontal:35,flex:1,alignItems:"center"}}>
            
            <Text >Fatak Pay</Text>
            <Text style={{marginTop:40,fontSize:26,fontWeight:"bold"}}>OTP verification</Text>
            <Text style={{marginTop:25,fontWeight:""}}>Enter The OTP sent to +919834567545</Text>

            <View style={{marginTop:60,height:30,flexWrap:"wrap",alignContent:"space-between",width:200}}>
                <View style={{borderWidth:1,width:30,height:30,borderRadius:15,backgroundColor:otp[0]?"purple":"white",borderColor:"purple"}}></View>
                <View style={{borderWidth:1,width:30,height:30,borderRadius:15,backgroundColor:otp[1]?"purple":"white",borderColor:"purple"}}></View>
                <View style={{borderWidth:1,width:30,height:30,borderRadius:15,backgroundColor:otp[2]?"purple":"white",borderColor:"purple"}}></View>
                <View style={{borderWidth:1,width:30,height:30,borderRadius:15,backgroundColor:otp[3]?"purple":"white",borderColor:"purple"}}></View>

            </View>
            <View style={{marginTop:130,flexDirection:"row"}}>
            <Text style={{fontWeight:""}}>Didn't receive an OTP </Text>

            <TouchableOpacity><Text style={{color:"purple"}}>Resent OTP</Text></TouchableOpacity>

            </View>

            <View style={{flexWrap:"wrap",height:250,justifyContent:"space-around",alignContent:'space-between',width:"75%",marginTop:15}}>
                <TouchableOpacity style={styles.numberButtons}
                  onPress={()=>{
                    if(otp.length<4)
                    setOtp([...otp,1])
                  }}
                ><Text>1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.numberButtons}
                 onPress={()=>{
                    if(otp.length<4)
                    setOtp([...otp,1])
                  }}
                ><Text>4</Text></TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"white",width:45,height:45,borderRadius:25,justifyContent:"center",alignItems:"center",shadowOffset:{height:3},shadowColor:"gray",shadowOpacity:0.5}}
                 onPress={()=>{
                    if(otp.length<4)
                    setOtp([...otp,1])
                  }}
                ><Text>7</Text></TouchableOpacity>
                <View style={{marginTop:10,backgroundColor:"white",width:35,height:35,borderRadius:25,justifyContent:"center",alignItems:"center"}}><Text></Text></View>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"white",width:45,height:45,borderRadius:25,justifyContent:"center",alignItems:"center",shadowOffset:{height:3},shadowColor:"gray",shadowOpacity:0.5}}
                 onPress={()=>{
                    if(otp.length<4)
                    setOtp([...otp,1])
                  }}
                ><Text>2</Text></TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"white",width:45,height:45,borderRadius:25,justifyContent:"center",alignItems:"center",shadowOffset:{height:3},shadowColor:"gray",shadowOpacity:0.5}}
                 onPress={()=>{
                    if(otp.length<4)
                    setOtp([...otp,1])
                  }}
                ><Text>5</Text></TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"white",width:45,height:45,borderRadius:25,justifyContent:"center",alignItems:"center",shadowOffset:{height:3},shadowColor:"gray",shadowOpacity:0.5}}
                 onPress={()=>{
                    if(otp.length<4)
                    setOtp([...otp,1])
                  }}
                ><Text>8</Text></TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"white",width:45,height:45,borderRadius:25,justifyContent:"center",alignItems:"center",shadowOffset:{height:3},shadowColor:"gray",shadowOpacity:0.5}}
                 onPress={()=>{
                    if(otp.length<4)
                    setOtp([...otp,1])
                  }}
                ><Text>0</Text></TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"white",width:45,height:45,borderRadius:25,justifyContent:"center",alignItems:"center",shadowOffset:{height:3},shadowColor:"gray",shadowOpacity:0.5}}
                 onPress={()=>{
                    if(otp.length<4)
                    setOtp([...otp,1])
                  }}
                ><Text>3</Text></TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"white",width:45,height:45,borderRadius:25,justifyContent:"center",alignItems:"center",shadowOffset:{height:3},shadowColor:"gray",shadowOpacity:0.5}}
                 onPress={()=>{
                    if(otp.length<4)
                    setOtp([...otp,1])
                  }}
                ><Text>6</Text></TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,backgroundColor:"white",width:45,height:45,borderRadius:25,justifyContent:"center",alignItems:"center",shadowOffset:{height:3},shadowColor:"gray",shadowOpacity:0.5}}
                 onPress={()=>{
                    if(otp.length<4)
                    setOtp([...otp,1])
                  }}
                ><Text>9</Text></TouchableOpacity>
               
                <TouchableOpacity style={{marginTop:10,backgroundColor:"white",width:45,height:45,borderRadius:25,justifyContent:"center",alignItems:"center",shadowOffset:{height:3},shadowColor:"gray",shadowOpacity:0.5}}
                 onPress={()=>{
                    let temp = otp;
                    temp.pop();
                    setOtp([...temp])
                 }}
                >{myIcon}</TouchableOpacity>


            </View>

            <TouchableOpacity style={{borderRadius:25,borderWidth:1,width:230,height:50,marginTop:50,justifyContent:"center",alignItems:"center",backgroundColor:otp.length==4?"purple":"gray"}}
            disabled={otp.length!=4}
            >
                <Text style={{color:"white"}}>Continue</Text>
            </TouchableOpacity>


             
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    numberButtons:{
        marginTop:10,backgroundColor:"white",width:45,height:45,borderRadius:25,justifyContent:"center",alignItems:"center",shadowOffset:{height:3},shadowColor:"gray",shadowOpacity:0.5
    }
})