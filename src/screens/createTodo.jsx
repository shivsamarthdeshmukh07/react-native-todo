import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo} from '../redux/rtk/todoSlice';
import DropDown from '../component/dropDown';
import TimePicker from '../component/timePicker';
import DatePicker from '../component/datePicker';
import { abc } from '../../App';

export default CreateTodo = ({navigation,route}) => {
 const {currentTheme,setCurrentTheme} = useContext(abc)
  console.log("kkkkkkk",currentTheme)
  const [data, setData] = useState({
    title: '',
    purpose: '',
    description: '',
    priority: '',
    date:'',
    startTime:'',
    endTime:'',
  }); 
  const oldData = route.params
  console.log("hiiiii",route.params)
  const [currDate, setCurrDate] = useState('');
  const [currPurpose, setcurrPurpose] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  

  console.log(oldData)

   useEffect(()=>{
   // setData({...data,priority:oldData?.priority})
   setData({...oldData})
   },[])

  

  

  

  
    
  

  const dispatch = useDispatch();
  return (
    <View style={{backgroundColor:currentTheme.containerBackgoundColor}}>
    <SafeAreaView style={{marginHorizontal: 20, marginTop:80,backgroundColor:currentTheme.containerBackgoundColor}}>
      <View style={{flexDirection: 'row',justifyContent:"space-between"}}>
      <TouchableOpacity onPress={() => navigation.navigate('show')}>
      <Text style={{marginTop: 7, fontSize: 20,color:currentTheme.textColor }}>X</Text>
      </TouchableOpacity>
        
        <Text
          style={{
            marginTop: 0,
            fontSize: 28,
            // fontFamily: 'bold',
             alignItems:"center",
             color:currentTheme.textColor

          }}>
            {oldData?"Edit Task":"Create New Task"}
          
        </Text>
       
      <Text style={{marginTop: 7, fontSize: 20,}}> </Text>
        
      </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop: 25, fontSize: 20,marginBottom:10}}>
      <Text style={{fontSize: 20,color:currentTheme.textColor}}>Schedule</Text>

        <DatePicker getDataFromChild={setCurrDate}/>
        {/* {()=>setData({...data,date:currDate})} */}
        </View>
      <Text style={{marginTop: 25, fontSize: 20,color:currentTheme.textColor}}>Title</Text>
      <TextInput
       
        
        onChangeText={(text) => setData({...data,title:text})}
        style={{
          
          borderBottomWidth: 1,
          borderColor:currentTheme.textColor,
          marginTop: 15,
          fontSize: 17,
          height: 30,
          paddingBottom:10
          
        }}
        value={data.title}
        ></TextInput>
      <Text style={{marginTop: 25, fontSize: 20,color:currentTheme.textColor}}>Purpose</Text>
       {/* <TextInput
       
        
        onChangeText={(text) => setData({...data,purpose:text})}
        style={{
          borderBottomWidth: 1,
          marginTop: 15,
          fontSize: 17,
          height: 30,
          paddingBottom:10
        }}></TextInput> */}
        <DropDown getDataFromChild={setcurrPurpose} value={data.purpose}/>
        {/* {()=>setData({...data,purpose:currPurpose})} */}


        <View style={{flexDirection:"row"}}>
      <Text style={{marginTop: 25, fontSize: 20,color:currentTheme.textColor}}>Start time</Text>
      <Text style={{marginTop: 25,marginLeft:125, fontSize: 20,color:currentTheme.textColor}}>End time</Text>
        
          
          </View> 
         
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <TimePicker getDataFromChild={setData} start ={data.startTime} />
        {/* {()=>setData({...data,startTime:start})} */}

        <TimePicker getDataFromChild={setData} start ={data.endTime}/>
        {/* {()=>setData({...data,endTime:end})} */}

          
          </View> 
     
      <Text style={{marginTop: 25, fontSize: 20,borderColor:currentTheme.textColor,}}>Priority</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:5}}>
        <TouchableOpacity
          style={{
            marginTop: 10,
            borderWidth: 1,
            height: 35,
            width: 90,
            borderRadius: 5,
            borderColor: data.priority === 'low' ? 'orange' : 'black',
          }}
          onPress={() => {setData({...data, priority: 'low'})}}>
          <Text style={{alignSelf: 'center', paddingTop: 7,color:data.priority === 'low' ? 'orange' : 'black'}}>Low</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
            borderWidth: 1,
            height: 35,
            width: 90,
            borderRadius: 5,
            borderColor: data.priority === 'medium' ? 'green' : 'black',
          }}
          onPress={() => {setData({...data, priority: 'medium'})}}>
          <Text style={{alignSelf: 'center', paddingTop: 7,color:data.priority === 'medium' ? 'green' : 'black'}}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
            borderWidth: 1,
            height: 35,
            width: 90,
            borderRadius: 5,
            borderColor: data.priority === 'high' ? 'red' : 'black',
          }}
          onPress={() => {setData({...data, priority: 'high'})}}>
          <Text style={{alignSelf: 'center', paddingTop: 7,color:data.priority === 'high' ? 'red' : 'black'}}>High</Text>
        </TouchableOpacity>

      </View>

      <Text style={{marginTop: 25, fontSize: 20}}>Description</Text>
      <TextInput
      
        value={data.description}
        onChangeText={text => setData({...data, description: text})}
        style={{
          borderBottomWidth: 1,
          marginTop: 15,
          fontSize: 17,
          height: 30,
          paddingBottom:10
        }}></TextInput>
     

      <TouchableOpacity
        style={{
          marginTop: 65,
          borderWidth: 1,
          height: 55,
          width: '100%',
          borderRadius: 10,
          borderColor:"white",
          backgroundColor: '#1A73E9',
          justifyContent:"center",
          alignItems:"center"
        }}
        onPress={() => {
          // console.log("hiiiii",currDate)
          // setData({...data,date:currDate,purpose:currPurpose,startTime:start,endTime:end})
          // console.log('heyyyyyyyyy')
          dispatch(addTodo({...data,date:currDate,purpose:currPurpose,startTime:start,endTime:end}));
        }}>
        <Text
          style={{
    
            
            fontSize: 20,
            color: 'white',
          }}>
           {oldData?"Update Task":"Create Task"}
        </Text>
      </TouchableOpacity>

      <Button title="back" onPress={() => navigation.navigate('show')}></Button>
    </SafeAreaView>
    </View>
  );
};
